import NextImage from 'next/image'
import styles from './Navbar.module.scss'
import NextLink from 'next/link'
import React from 'react'
import useScrollPosition from '@/hooks/useScrollPosition'

export default function Navbar() {
  const [expanded, setExpanded] = React.useState(false)
  const scrollPos = useScrollPosition()
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.navbar} ${
        scrollPos > 5 && styles.navbar_scrolled
      }`}
    >
      <div className={styles.navbar_content}>
        <div className={styles.navbar_brand_container}>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={`navbar-toggler ${styles.navbar_toggle} ${
              expanded ? styles.collapsed : ''
            }`}
          />
          <NextLink href="/#" legacyBehavior passHref>
            <a className="navbar-brand" href="/#">
              <NextImage
                src="/images/logo.svg"
                width={0.65 * 263}
                height={0.65 * 42}
                alt="webkick logo"
              />
            </a>
          </NextLink>
        </div>
        <div className={styles.navbar_nav_container}>
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_collapse}`}
            id="toggle-navigation-pane"
          >
            <li className={`nav-item ${styles.navbar_nav}`}>
              <NextLink href="/#solution" passHref legacyBehavior>
                <a className="nav-link">Solution</a>
              </NextLink>
            </li>
            <li className={`nav-item ${styles.navbar_nav}`}>
              <NextLink href="/#process" passHref legacyBehavior>
                <a className="nav-link">Processus</a>
              </NextLink>
            </li>
            <li className={`nav-item ${styles.navbar_nav}`}>
              <NextLink href="/#pricing" passHref legacyBehavior>
                <a className="nav-link">Tarification</a>
              </NextLink>
            </li>
            <li className={`nav-item ${styles.navbar_nav}`}>
              <NextLink href="/blog" passHref legacyBehavior>
                <a className="nav-link">Blogue</a>
              </NextLink>
            </li>
            <li className={`nav-item ${styles.navbar_nav}`}>
              <NextLink href="/contact" passHref legacyBehavior>
                <a className="nav-link">Nous contacter</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/#quote">
                <button type="button" className="btn btn-primary">
                  Obtenir ma soumission
                </button>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
