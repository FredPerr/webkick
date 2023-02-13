import Button from '../button'
import LogoStatic from '../logo/LogoStatic'
import NextLink from 'next/link'

export default function Navbar() {
  return (
    <div
      css={{
        width: '100%',
        padding: '1rem 12%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <NextLink href="/#">
        <LogoStatic css={{ height: 28, '& path': { fill: 'white' } }} />
      </NextLink>
      <nav
        css={{
          '& a': {
            fontWeight: 600,
            fontSize: 14,
            margin: '0 1rem',
            color: 'white',
            letterSpacing: '.5px',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              opacity: 0.8,
            },
          },
        }}
      >
        <NextLink href="/#services">Services</NextLink>
        <NextLink href="/#about">Garantie</NextLink>
        {/* <NextLink href="/blog">Blogue</NextLink> */}
        <NextLink href="/#quote">Nous contacter</NextLink>
      </nav>
      <nav>
        <NextLink href="/#quote">
          <Button variant="contained" color="primary" arrow>
            Obtenir ma soumission
          </Button>
        </NextLink>
      </nav>
    </div>
  )
}
