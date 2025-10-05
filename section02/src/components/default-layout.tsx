import { ReactNode } from 'react'
import style from './default-layout.module.css'
import Link from 'next/link'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/public'}>[ OneBite Books ]</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>푸터영역~</footer>
    </div>
  )
}
