import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import DefaultLayout from '../layouts/default'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <DefaultLayout></DefaultLayout>
    </div>
  )
}

export default Home
