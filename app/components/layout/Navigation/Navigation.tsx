import { Logo } from '@/components/layout/Navigation/Logo'
import { MenuContainer } from '@/components/layout/Navigation/MenuContainer/MenuContainer'
import { FC } from 'react'
import styles from './Navigation.module.scss'

export const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo/>
      <MenuContainer />
    </div>  
  )
}