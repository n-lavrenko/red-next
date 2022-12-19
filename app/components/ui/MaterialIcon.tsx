import { MaterialIconName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'


export const MaterialIcon: FC<{ name: MaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]
  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}