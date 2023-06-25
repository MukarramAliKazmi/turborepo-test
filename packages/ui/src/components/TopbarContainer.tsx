import React from 'react'

export interface TopbarContainerProps {
  children: React.ReactNode
}

export const TopbarContainer: React.FC<TopbarContainerProps> = ({
  children,
}) => (
  <div className="w-full h-20 flex items-center justify-between px-4 md:px-6">
    <div className="text-5xl font-bold text-sky-500">nustX</div>
    <div className="flex items-center gap-4">{children}</div>
  </div>
)
