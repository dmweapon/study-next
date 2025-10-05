import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id_list } = router.query // 파라미터가 여러개일 경우 배열로 받음
  return <h1>Book, param으로 전달받은 id : {id_list}</h1>
}
