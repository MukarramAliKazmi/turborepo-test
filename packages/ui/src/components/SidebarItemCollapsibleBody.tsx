import React from 'react'

export type SidebarItemCollapsibleBodyProps = {
  isOpen: boolean
  children: React.ReactNode
}

export const SidebarItemCollapsibleBody: React.FC<
  SidebarItemCollapsibleBodyProps
> = ({ isOpen, children }) => (
  <div
    className={`flex flex-col pl-5 overflow-y-hidden transition-[max-height] ease-in-out duration-500 ${
      !isOpen ? ' max-h-0' : 'max-h-40'
    }`}
  >
    {children}
  </div>
)
