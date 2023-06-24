import React, { useState } from 'react'

import { Sidebar, SidebarItemProps } from '@/components/sidebar'
import { Topbar } from '@/components/topbar'

export interface LayoutProps {
  children: React.ReactNode
  sidebarItems: Array<SidebarItemProps>
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebarItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="w-screen h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500">
      <Topbar
        isSidebarOpen={isSidebarOpen}
        handleIsSidebarOpen={() =>
          isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
        }
      />
      <div className="w-full h-full flex grid-cols-[auto_auto] relative bg-inherit overflow-x-hidden">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleIsSidebarOpen={() =>
            isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
          }
          sidebarItems={sidebarItems}
        />
        <div className="w-full md:w-screen h-full relative overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
