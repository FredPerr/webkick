import NextImage from 'next/image'
import styles from './Navbar.module.scss'
import NextLink from 'next/link'
import React from 'react'
import useScrollPosition from '@/hooks/useScrollPosition'
import BSNavbar from 'react-bootstrap/Navbar'
import { Button, Nav } from 'react-bootstrap'

export default function Navbar() {
  const [expanded, setExpanded] = React.useState(false)
  const scrollPos = useScrollPosition()
  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`${styles.navbar} ${scrollPos > 5 && styles.navbar_scrolled}`}
      onToggle={() => setExpanded(!expanded)}
    >
      <div className={styles.navbar_content}>
        <div className={styles.navbar_brand_container}>
          <BSNavbar.Toggle
            aria-controls="navbar-collapse"
            aria-label="Toggle navigation"
            className={`${styles.navbar_toggle} ${
              expanded ? styles.collapsed : ''
            }`}
          />
          <NextLink href="/#" legacyBehavior passHref>
            <BSNavbar.Brand>
              <NextImage
                src="/images/logo.svg"
                width={0.65 * 263}
                height={0.65 * 42}
                alt="webkick logo"
              />
            </BSNavbar.Brand>
          </NextLink>
        </div>
        <BSNavbar.Collapse
          id="navbar-collapse"
          className={styles.navbar_collapse}
        >
          <Nav className={`${styles.navbar_nav}`} navbarScroll>
            <NextLink href="/#solution" passHref legacyBehavior>
              <Nav.Link>Solution</Nav.Link>
            </NextLink>
            <NextLink href="/#process" passHref legacyBehavior>
              <Nav.Link>Processus</Nav.Link>
            </NextLink>
            <NextLink href="/pricing" passHref legacyBehavior>
              <Nav.Link>Tarification</Nav.Link>
            </NextLink>
            {/* <NextLink href="/blog" passHref legacyBehavior>
              <Nav.Link>Blogue</Nav.Link>
            </NextLink> */}
            <NextLink href="/contact" passHref legacyBehavior>
              <Nav.Link>Nous contacter</Nav.Link>
            </NextLink>
            <NextLink href="/#quote" passHref legacyBehavior>
              <Button>Obtenir ma soumission</Button>
            </NextLink>
          </Nav>
        </BSNavbar.Collapse>
      </div>
    </BSNavbar>
  )
}
