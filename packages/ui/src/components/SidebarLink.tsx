import React from 'react'
import Link from 'next/link'

export type SidebarLinkProps = {
  title: string
  href: string
  isActive: boolean
}

export const SidebarLink: React.FC<SidebarLinkProps> = props => {
  const { title, href, isActive } = props
  return (
    <Link
      href={href || ''}
      className={`p-4 border-l-2 transition-[border,_padding] duration-500 ${
        isActive
          ? 'text-sky-500 border-sky-500 font-semibold'
          : 'border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500'
      }`}
    >
      {title}
    </Link>
  )
}
