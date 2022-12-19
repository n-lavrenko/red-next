import { AuthItems } from '@/components/layout/Navigation/MenuContainer/auth/AuthItems'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import { MenuItem } from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { FC } from 'react'
import styles from './menu.module.scss'


export const Menu: FC<{menu: IMenu}> = ({menu: {items, title}}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map(item => (
          <MenuItem item={item} key={item.link} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  )
}