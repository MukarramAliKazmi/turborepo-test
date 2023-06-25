'use client'

import React from 'react'
import { LogoutButton } from '@/components/LogoutButton'
import { SidebarBackdrop } from '@/components/SidebarBackdrop'

export interface SidebarContainerProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
  children: React.ReactNode
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
  children,
}) => (
  <div
    className={`z-30 h-full flex flex-col w-48 md:w-64 px-4 py-6 md:px-6 md:py-8 bg-inherit transition-[transform] duration-500 -translate-x-full md:translate-x-0 absolute md:relative box-border ${
      isSidebarOpen && 'translate-x-0'
    }`}
  >
    <div className="flex flex-col flex-1 overflow-y-auto pb-16">{children}</div>
    <LogoutButton />
    <SidebarBackdrop
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    />
  </div>
)
