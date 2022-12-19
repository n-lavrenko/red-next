import { Menu } from '@/components/layout/Navigation/MenuContainer/Menu'
import { firstMenu, userMenu } from '@/components/layout/Navigation/MenuContainer/menu.data'
import { FC } from 'react'


export const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <Menu menu={userMenu} />
    </div>
  )
}