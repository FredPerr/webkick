import Nav from 'react-bootstrap/Nav'
import BSNavbar from 'react-bootstrap/Navbar'
import NextImage from 'next/image'
import styles from './Navbar.module.scss'
import NextLink from 'next/link'
import { Button } from 'react-bootstrap'
import React from 'react'
import { NavbarCollapseProps } from 'react-bootstrap/esm/NavbarCollapse'

type CollapseType =
  | React.ForwardRefExoticComponent<NavbarCollapseProps>
  | React.RefAttributes<HTMLDivElement>

export default function Navbar() {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <BSNavbar
      expand="lg"
      className={styles.navbar}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <div className={styles.navbar_content}>
        <div className={styles.navbar_brand_container}>
          <BSNavbar.Toggle
            className={`${styles.navbar_toggle} ${
              expanded ? styles.collapsed : ''
            }`}
            aria-controls="toggle-navigation-pane"
          />
          <BSNavbar.Brand href="/#">
            <NextImage
              src="/images/logo.svg"
              width={0.65 * 263}
              height={0.65 * 42}
              alt="webkick logo"
            />
          </BSNavbar.Brand>
        </div>
        <div className={styles.navbar_nav_container}>
          <BSNavbar.Collapse
            className={styles.navbar_collapse}
            id="toggle-navigation-pane"
          >
            <Nav className={styles.navbar_nav}>
              <NextLink href="/#solution" passHref legacyBehavior>
                <Nav.Link>Solution</Nav.Link>
              </NextLink>
              <NextLink href="/#process" passHref legacyBehavior>
                <Nav.Link>Processus</Nav.Link>
              </NextLink>
              <NextLink href="/#pricing" passHref legacyBehavior>
                <Nav.Link>Tarification</Nav.Link>
              </NextLink>
              <NextLink href="/blog" passHref legacyBehavior>
                <Nav.Link>Blogue</Nav.Link>
              </NextLink>
              <NextLink href="/contact" passHref legacyBehavior>
                <Nav.Link>Nous contacter</Nav.Link>
              </NextLink>
              <NextLink href="/#quote">
                <Button variant="primary">Obtenir ma soumission</Button>
              </NextLink>
            </Nav>
          </BSNavbar.Collapse>
        </div>
      </div>
    </BSNavbar>
  )
}
