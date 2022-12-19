import { Navigation } from '@/components/layout/Navigation/Navigation'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { FC } from 'react'
import styles from './Layout.module.scss'


export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  )
}