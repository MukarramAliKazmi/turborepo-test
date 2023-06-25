import React from 'react'

export interface LayoutProps {
  topbar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  topbar,
  sidebar,
  children,
}) => (
  <div className="w-screen h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500">
    {topbar}
    <div className="w-full h-full flex grid-cols-[auto_auto] relative bg-inherit overflow-x-hidden">
      {sidebar}
      <div className="w-full md:w-screen h-full relative overflow-y-auto p-4 md:p-6">
        {children}
      </div>
    </div>
  </div>
)
