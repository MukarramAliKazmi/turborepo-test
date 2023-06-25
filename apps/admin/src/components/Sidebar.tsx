'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  SidebarItemCollapsible,
  SidebarItemProps,
} from '@/components/SidebarItemCollapsible'
import { SidebarContainer, SidebarLink } from 'ui'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { toggleSidebar } from '@/redux/slices/sidebarSlice'

interface SidebarWithHrefProps {
  title: string
  href: string
  sidebarSubitems?: never
}

interface SidebarWithSubitemsProps {
  title: string
  href?: undefined
  sidebarSubitems: Array<SidebarItemProps>
}

export type SidebarProps = Array<
  SidebarWithHrefProps | SidebarWithSubitemsProps
>

const Sidebar: React.FC<{ sidebarItems: SidebarProps }> = ({
  sidebarItems,
}) => {
  const pathname = usePathname()

  const dispatch = useAppDispatch()

  const isSidebarOpen = useAppSelector(state => state.sidebar.isOpen)

  const handleIsSidebarOpen = () => {
    dispatch(toggleSidebar({}))
  }

  return (
    <SidebarContainer
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    >
      {sidebarItems.map(item =>
        item.sidebarSubitems ? (
          <SidebarItemCollapsible
            key={item.title}
            title={item.title}
            sidebarSubitems={item.sidebarSubitems}
          />
        ) : (
          <SidebarLink
            key={item.title}
            title={item.title}
            href={item.href}
            isActive={item.href === pathname}
          />
        ),
      )}
    </SidebarContainer>
  )
}

export default Sidebar
