import BookItem from '@/components/book-item'
import style from './page.module.css'
import { BookData } from '@/types'
import { delay } from '@/util/delay'
import { Suspense } from 'react'
import BookListSkeleton from '@/components/skeleton/book-list-skeleton'
import { headers } from 'next/headers'
import { Metadata } from 'next'

async function AllBooks() {
  await delay(1500)
  const headerList = await headers()
  const host = headerList.get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const response = await fetch(`${protocol}://${host}/api/book`)

  if (!response.ok) {
    // return <div>오류가 발생했습니다...</div>
    console.log('여기까지 옴')
    throw new Error(response.statusText)
  }
  const allBooks: BookData[] = await response.json()

  return (
    <div>
      {allBooks.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

async function RecoBooks() {
  await delay(3000)
  const headerList = await headers()
  const host = headerList.get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const response = await fetch(`${protocol}://${host}/api/book/random`, {
    next: { revalidate: 3 },
  })
  if (!response.ok) {
    // return <div>오류가 발생했습니다...</div>
    throw new Error(response.statusText)
  }
  const recoBook = await response.json()
  return (
    <div>
      {recoBook.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_NEXT_BASE_URL}`),
  title: '한입 북스',
  description: '한입 북스에 등록된 도서를 만나보세요',
  openGraph: {
    title: '한입 북스',
    description: '한입 북스에 등록된 도서를 만나보세요',
    images: ['/thumbnail.png'],
  },
}

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  )
}
