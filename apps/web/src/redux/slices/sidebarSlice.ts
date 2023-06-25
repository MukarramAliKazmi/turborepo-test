'use client'

import { createSlice, Slice } from '@reduxjs/toolkit'

export interface SidebarState {
  isOpen: boolean
}

const initialState: SidebarState = {
  isOpen: false,
}

export const sidebarSlice: Slice<SidebarState> = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: state => {
      const newState = { ...state }
      newState.isOpen = !newState.isOpen
      return newState
    },
  },
})

export const { toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
