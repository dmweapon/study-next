import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 아무나 재생성 못하도록 토큰 검증로직 필요
  // (생략)

  try {
    await res.revalidate('/') // '/'경로에 해당하는 페이지를 재생성시키는 함수
    return res.json({ revalidate: true })
  } catch (e) {
    res.status(500).send('Page Revalidation Failed')
  }
}
