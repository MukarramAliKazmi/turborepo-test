import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaChevronRight } from 'react-icons/fa'
import { SidebarLink, SidebarLinkProps } from '@/components/SidebarLink'

export type SidebarItemCollapsibleProps = {
  title: string
  sidebarSubitems: Array<SidebarLinkProps>
}

export const SidebarItemCollapsible: React.FC<
  SidebarItemCollapsibleProps
> = props => {
  const router = useRouter()
  const { title, sidebarSubitems } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sidebarSubitems) {
      setIsOpen(sidebarSubitems.some(item => item.href === router.pathname))
    }
  }, [router.pathname, sidebarSubitems])

  return (
    <div>
      <button
        type="button"
        className={`p-4 flex gap-2 items-center border-l-2 transition-[border,_padding] duration-500 ${
          sidebarSubitems.find(item => item.href === router.pathname)
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
      <div
        className={`flex flex-col pl-5 overflow-y-hidden transition-[max-height] ease-in-out duration-500 ${
          !isOpen ? ' max-h-0' : 'max-h-40'
        }`}
      >
        {sidebarSubitems.map(item => (
          <SidebarLink key={item.title} title={item.title} href={item.href} />
        ))}
      </div>
    </div>
  )
}
