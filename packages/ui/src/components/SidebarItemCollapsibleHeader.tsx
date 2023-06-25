import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export type SidebarItemCollapsibleHeaderProps = {
  isOpen: boolean
  setIsOpen: (x: boolean) => void
  title: string
  isActive: boolean
}

export const SidebarItemCollapsibleHeader: React.FC<
  SidebarItemCollapsibleHeaderProps
> = ({ title, isActive, isOpen, setIsOpen }) => (
  <button
    type="button"
    className={`p-4 flex gap-2 items-center border-l-2 transition-[border,_padding] duration-500 ${
      isActive
        ? 'text-sky-500 border-sky-500 font-semibold'
        : 'border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500'
    }`}
    onClick={() => setIsOpen(!isOpen)}
  >
    {title}
    <FaChevronRight
      className={`w-3 h-3 transition-transform ease-in-out duration-500 ${
        isOpen && 'transform rotate-90'
      }`}
    />
  </button>
)
