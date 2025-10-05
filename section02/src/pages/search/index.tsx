import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { q1 } = router.query
  return <h1>Search, q1 = {q1}</h1>
}
