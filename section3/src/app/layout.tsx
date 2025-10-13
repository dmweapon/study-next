import './globals.css'
import Link from 'next/link'
import style from './layout.module.css'
import Footer from '@/app/footer/page'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
