import { ReactNode } from 'react'
import SearchableLayout from '@/components/searchable-layout'
import BookItem from '@/components/book-item'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import fetchBooks from '@/lib/fetch-books'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const q1 = ctx.query.q1
  const books = await fetchBooks(q1 as string)
  return {
    props: {
      books,
    },
  }
}

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
