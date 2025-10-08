import style from './searchable-layout.module.css'
import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  // 검색했을 때 검색어가 서치바에 입력된 상태로 남기는 코드
  const q1 = router.query.q1 as string
  useEffect(() => {
    setSearch(q1 || '')
  }, [q1])

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search || q1 === search) return
    router.push(`/search?q1=${search}`)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
          placeholder="검색어를 입력하세요..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  )
}
