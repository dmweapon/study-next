import BookItem from '@/components/book-item'
import { BookData } from '@/types'
import { delay } from '@/util/delay'
import { Suspense } from 'react'

async function SearchResult({ q }: { q: string }) {
  // 임시 코드
  await delay(2000)

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

export default async function Page(props: PageProps<'/search'>) {
  const searchParams = await props.searchParams
  const qParam = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || ''
  return (
    <Suspense key={qParam || ''} fallback={<div>Loading ...</div>}>
      <SearchResult q={qParam || ''} />
    </Suspense>
  )
}
