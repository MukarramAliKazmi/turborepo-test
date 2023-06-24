import React from 'react'

export interface ToggleSidebarButtonProps {
  isOpen: boolean
  handleIsOpen: () => void
}

export const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({
  isOpen,
  handleIsOpen,
}) => (
  <button
    type="button"
    className={`w-6 h-4 md:hidden flex flex-col items-center justify-center relative ${
      isOpen ? '-gap-2' : 'gap-1.5'
    }`}
    onClick={handleIsOpen}
  >
    <div
      className={`w-full h-1 bg-sky-500 rounded-full absolute top-0 transition-all duration-500 ${
        isOpen && 'rotate-45 top-1.5'
      }`}
    />
    <div
      className={`w-full h-1 bg-sky-500 rounded-full absolute bottom-0 transition-all duration-500 ${
        isOpen && '-rotate-45 bottom-1.5'
      }`}
    />
  </button>
)
