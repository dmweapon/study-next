'use server'
import { revalidatePath } from 'next/cache'
import { delay } from '@/util/delay'

export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString()
  const content = formData.get('content')?.toString()
  const author = formData.get('author')?.toString()

  // 누락된 데이터가 있을 경우 예외처리
  if (!bookId || !content || !author) {
    return {
      status: false,
      error: '리뷰 내용과 작성자를 입력해주세요',
    }
  }

  try {
    await delay(2000)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/`, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // '/book/${bookID}' 페이지의 데이터 캐시 업데이트
    revalidatePath(`/book/${bookId}`)
    // useActionState(client)에서 응답받을 수 있는 성공 객체 리턴
    return { status: true, error: '' }
  } catch (e) {
    // useActionState(client)에서 에러처리할 수 있도록 에러 발생시 에러 객체 리턴
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${e}`,
    }
  }
}
