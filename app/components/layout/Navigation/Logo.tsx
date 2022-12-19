import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from '@/assets/images/logo.svg'

export const Logo: FC = () => {
  return <Link href={'/'} className={'px-layout mb-10 block'}>
    <Image src={logo} alt={'Online Cinema'} width={247} height={34 } draggable={false}/>
  </Link>
}