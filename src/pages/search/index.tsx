import { ReactNode, useEffect, useState } from 'react'
import SearchableLayout from '@/components/searchable-layout'
import BookItem from '@/components/book-item'
import { BookData } from '@/styles/types'
import { useRouter } from 'next/router'
import fetchBooks from '@/lib/fetch-books'

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([])
  const router = useRouter()
  const q = router.query.q1 as string

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string)
    setBooks(data)
  }

  useEffect(() => {
    if (q) {
      fetchSearchResult()
    }
  }, [q])

  return (
    <div>
      {books.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
