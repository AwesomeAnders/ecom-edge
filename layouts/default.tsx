import { FC } from 'react'
import Navbar from '../components/Navbar'

interface defaultLayoutProps {
  children?: React.ReactNode
}

const DefaultLayout: FC<defaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
