'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import {
  SidebarLink,
  SidebarItemCollapsibleBody,
  SidebarItemCollapsibleHeader,
} from 'ui'

export interface SidebarItemProps {
  title: string
  href: string
}

export interface SidebarItemCollapsibleProps {
  title: string
  sidebarSubitems: Array<SidebarItemProps>
}

export const SidebarItemCollapsible: React.FC<
  SidebarItemCollapsibleProps
> = props => {
  const pathname = usePathname()
  const { title, sidebarSubitems } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sidebarSubitems) {
      setIsOpen(sidebarSubitems.some(item => item.href === pathname))
    }
  }, [pathname, sidebarSubitems])

  return (
    <>
      <SidebarItemCollapsibleHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isActive={!!sidebarSubitems.find(item => item.href === pathname)}
        title={title}
      />
      <SidebarItemCollapsibleBody isOpen={isOpen}>
        {sidebarSubitems.map(item => (
          <SidebarLink
            key={item.title}
            title={item.title}
            href={item.href}
            isActive={item.href === pathname}
          />
        ))}
      </SidebarItemCollapsibleBody>
    </>
  )
}
