import { ReactNode } from 'react'
import Searchbar from '@/component/searchbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        <Searchbar />
      </div>
      {children}
    </div>
  )
}
