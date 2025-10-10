export default async function page(
  {
    searchParams
  }: {
    searchParams: Promise<{ q: string }>
  }) {
  const { q } = await searchParams
  console.log(q)
  return <div>Search 페이지, q = {q}</div>
}
