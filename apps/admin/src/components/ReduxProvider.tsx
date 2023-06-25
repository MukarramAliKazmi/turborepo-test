'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export interface ProviderProps {
  children: React.ReactNode
}

export const ReduxProvider: React.FC<ProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
