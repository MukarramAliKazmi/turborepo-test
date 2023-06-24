import React from 'react'
import { ToggleSidebarButton } from '@/components/toggle-sidebar-button'
import { ToggleThemeButton } from '@/components/toggle-theme-button'

export interface TopbarProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
}

export const Topbar: React.FC<TopbarProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div className="w-full h-20 flex items-center justify-between px-4 md:px-6">
    <div className="text-5xl font-bold text-sky-500">nustX</div>
    <div className="flex items-center gap-4">
      <ToggleThemeButton />
      <ToggleSidebarButton
        isOpen={isSidebarOpen}
        handleIsOpen={handleIsSidebarOpen}
      />
    </div>
  </div>
)
