import { BookData } from '@/styles/types'

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `http://localhost:12345/book`

  if (q) {
    url += `/search?q=${q}`
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
