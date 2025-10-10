import styles from './page.module.css'
import ClientComponent from '@/app/(with-searchbar)/test/client-component'
import ServerComponent from '@/app/(with-searchbar)/test/server-component'

export default function Home() {
  return (
    <div className={styles.page}>
      <div>인덱스 페이지</div>
      <div>
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
      </div>
    </div>
  )
}
