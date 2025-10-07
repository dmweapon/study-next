import { BookData } from '@/styles/types'

export default async function fetchBooks(): Promise<BookData[]> {
  const url = `http://localhost:12345/api/book`

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
