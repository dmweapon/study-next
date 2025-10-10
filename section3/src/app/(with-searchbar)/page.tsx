import styles from './page.module.css'
import ClientComponent from '@/component/client-component'

export default function Home() {
  return (
    <div className={styles.page}>
      <div>인덱스 페이지</div>
      <div>
        <ClientComponent>
          <></>
        </ClientComponent>
      </div>
    </div>
  )
}
