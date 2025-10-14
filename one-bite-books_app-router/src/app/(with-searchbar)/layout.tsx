import { ReactNode, Suspense } from 'react'
import Searchbar from '../../components/searchbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>데이터 로디중...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  )
}
