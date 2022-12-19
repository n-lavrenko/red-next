import { Layout } from '@/components/layout/Layout'
import { IHome } from '@/screens/home/home.interface'
import { FC } from 'react'


export const Home: FC<IHome> = () => {
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  )
}