import * as React from 'react'
import { Link } from 'gatsby'
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
	siteTitle
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
	  <header className={siteTitle}>My First Gatsby Site</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/how" className={navLinkText}>How</Link></li>
		  <li className={navLinkItem}><Link to="/node-frameworks" className={navLinkText}>Node Frameworks</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout