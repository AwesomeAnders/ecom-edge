import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <Button> {t('message')}</Button>
    </div>
  )
}
