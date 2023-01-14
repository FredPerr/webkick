import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@/components/button'

export default function LangLink() {
  const { locale, asPath } = useRouter()
  const anchorLang = locale === 'fr' ? 'en' : 'fr'
  return (
    <Link href={asPath} locale={anchorLang}>
      <Button variant="text" color="primary">
        {anchorLang}
      </Button>
    </Link>
  )
}
