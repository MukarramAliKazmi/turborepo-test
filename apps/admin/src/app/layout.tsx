import React from 'react'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ReduxProvider } from '@/components/ReduxProvider'
import 'ui/styles.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <ReduxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout
