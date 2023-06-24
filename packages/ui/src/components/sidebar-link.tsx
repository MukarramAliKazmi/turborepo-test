import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type SidebarLinkProps = {
  title: string
  href: string
}

export const SidebarLink: React.FC<SidebarLinkProps> = props => {
  const router = useRouter()
  const { title, href } = props
  return (
    <Link
      href={href || ''}
      className={`p-4 border-l-2 transition-[border,_padding] duration-500 ${
        router.pathname === href
          ? 'text-sky-500 border-sky-500 font-semibold'
          : 'border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500'
      }`}
    >
      {title}
    </Link>
  )
}
