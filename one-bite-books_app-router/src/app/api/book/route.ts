export async function GET() {
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
    //   cache: 'force-cache',
    // })
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`)

    if (!response.ok) {
      return Response.json({ error: 'Data not found' }, { status: 404 })
      // throw new Error(response.statusText)
    }

    const data = await response.json()
    return Response.json(data, { status: 200 })
  } catch (error) {
    console.error('[GET Error]', error)
    return Response.json({ error: 'Server failed' }, { status: 500 })
  }
}
