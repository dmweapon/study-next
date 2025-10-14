import { BookData } from '@/types'
import { headers } from 'next/headers'

export default async function Footer() {
  const headerList = await headers()
  const host = headerList.get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const response = await fetch(`${protocol}://${host}/api/book`, {
    cache: 'force-cache',
  })

  if (!response.ok) {
    return <footer>제작 @dmwpys</footer>
  }

  const books: BookData[] = await response.json()
  const bookCount = books.length

  return (
    <footer>
      <div>제작 @dmwpys</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  )
}
