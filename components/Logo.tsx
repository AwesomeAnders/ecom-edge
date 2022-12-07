import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import logo from '../public/logo.webp'

export const Logo: FC = () => {
  return (
    <Box>
      <Image src={logo} alt="Lagersalg" />{' '}
    </Box>
  )
}

export default Logo
