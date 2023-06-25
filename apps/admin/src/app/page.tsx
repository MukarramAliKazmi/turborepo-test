import React from 'react'
import { Metadata } from 'next'
import Sidebar, { SidebarProps } from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { Layout } from 'ui'

export const metadata: Metadata = {
  title: 'nustX',
}

const sidebarItems: SidebarProps = [
  {
    title: 'Abc',
    href: '/abc',
  },
  {
    title: 'Xyz',
    sidebarSubitems: [
      { title: 'mno', href: '/mno' },
      { title: 'Dashboard', href: '/' },
    ],
  },
  {
    title: 'Pqr',
    sidebarSubitems: [
      { title: 'Def', href: '/def' },
      { title: 'Ghi', href: '/ghi' },
    ],
  },
]

const Home = () => (
  <div>
    <main>
      <Layout
        topbar={<Topbar />}
        sidebar={<Sidebar sidebarItems={sidebarItems} />}
      >
        Dashboard
      </Layout>
    </main>
  </div>
)

export default Home
