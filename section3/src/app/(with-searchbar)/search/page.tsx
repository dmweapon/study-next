import BookItem from '@/components/book-item'
import { BookData } from '@/types'
import { delay } from '@/util/delay'
import { Suspense } from 'react'
import BookListSkeleton from '@/components/skeleton/book-list-skeleton'
import { Metadata } from 'next'
import { headers } from 'next/headers'

async function SearchResult({ q }: { q: string }) {
  // 임시 코드
  await delay(1500)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q ?? ''}`,
    {
      cache: 'force-cache',
    }
  )
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const books: BookData[] = await response.json()

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export async function generateMetadata(props: PageProps<'/search'>): Promise<Metadata> {
  const searchParams = await props.searchParams
  const q = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || ''
  const headerList = await headers()
  const host = headerList.get('host')
  return {
    metadataBase: new URL(`${process.env.NODE_ENV === 'development' ? 'http' : 'https'}://${host}`),
    title: `${q}의 검색 결과`,
    description: `${q}의 검색 결과입니다.`,
    openGraph: {
      title: `${q}의 검색 결과`,
      description: `${q}의 검색 결과입니다.`,
      images: ['/thumbnail.png'],
    },
  }
}

export default async function Page(props: PageProps<'/search'>) {
  const searchParams = await props.searchParams
  const qParam = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || ''
  return (
    <Suspense key={qParam || ''} fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={qParam || ''} />
    </Suspense>
  )
}
