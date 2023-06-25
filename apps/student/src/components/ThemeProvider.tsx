'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <NextThemeProvider attribute="class">{children}</NextThemeProvider>
)
