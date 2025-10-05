import { ReactNode } from 'react'
import style from './global-layout.module.css'
import Link from 'next/link'

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/'}>[ OneBite Books ]</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>푸터영역~</footer>
    </div>
  )
}
