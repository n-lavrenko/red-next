import { MaterialIconName } from '@/shared/types/icon.types'


export interface IMenuItem {
  icon: MaterialIconName,
  title: string,
  link: string
}
export interface IMenu {
  title: string,
  items: IMenuItem[]
}