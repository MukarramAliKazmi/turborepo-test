import React from 'react'
import { SidebarItemCollapsible } from '@/components/sidebar-item-collapsible'
import { SidebarLink, SidebarLinkProps } from '@/components/sidebar-link'
import { LogoutButton } from '@/components/logout-button'
import { SidebarBackdrop } from '@/components/sidebar-backdrop'

type SidebarWithHrefProps = {
  title: string
  href: string
  sidebarSubitems?: never
}

type SidebarWithSubitemsProps = {
  title: string
  href?: undefined
  sidebarSubitems: Array<SidebarLinkProps>
}

export type SidebarItemProps = SidebarWithHrefProps | SidebarWithSubitemsProps

export interface SidebarProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
  sidebarItems: Array<SidebarItemProps>
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
  sidebarItems,
}) => (
  <div
    className={`z-30 flex flex-col w-48 md:w-64 px-4 py-6 md:px-6 md:py-8 bg-inherit transition-[transform] duration-500 -translate-x-full md:translate-x-0 absolute md:relative h-full box-border ${
      isSidebarOpen && 'translate-x-0'
    }`}
  >
    <div className="flex flex-col flex-1 overflow-y-auto pb-16">
      {sidebarItems.map(item =>
        item.sidebarSubitems ? (
          <SidebarItemCollapsible
            key={item.title}
            title={item.title}
            sidebarSubitems={item.sidebarSubitems}
          />
        ) : (
          <SidebarLink key={item.title} title={item.title} href={item.href} />
        ),
      )}
    </div>
    <LogoutButton />
    <SidebarBackdrop
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    />
  </div>
)
