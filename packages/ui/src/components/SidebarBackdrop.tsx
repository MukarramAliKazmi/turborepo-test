import React from 'react'

export interface SidebarBackdropProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
}

export const SidebarBackdrop: React.FC<SidebarBackdropProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div
    className={`w-screen h-full absolute left-full top-0 pointer-events-none md:pointer-events-none md:backdrop-blur-none transition-[backdrop-filter,border-color] duration-500 z-20 border-l border-t border-gray-200 dark:border-gray-800 rounded-tl-3xl ${
      isSidebarOpen && 'pointer-events-auto backdrop-blur-sm'
    }`}
    onClick={handleIsSidebarOpen}
    onKeyDown={handleIsSidebarOpen}
    role="button"
    tabIndex={0}
    aria-label="Close sidebar"
  />
)
