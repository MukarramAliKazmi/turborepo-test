'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { TopbarContainer, ToggleThemeButton, ToggleSidebarButton } from 'ui'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { toggleSidebar } from '@/redux/slices/sidebarSlice'

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const dispatch = useAppDispatch()

  const isSidebarOpen = useAppSelector(state => state.sidebar.isOpen)

  const handleIsSidebarOpen = () => {
    dispatch(toggleSidebar({}))
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <TopbarContainer>
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <ToggleSidebarButton
        isOpen={isSidebarOpen}
        handleIsOpen={handleIsSidebarOpen}
      />
    </TopbarContainer>
  )
}

export default Topbar
