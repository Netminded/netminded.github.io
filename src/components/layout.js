import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import CookieBanner from './cookies'

const Layout = ({ simpleNav, isHero, children }) => {
  return (
    <>
      <Nav simpleNav={simpleNav} isHero={isHero} />
      <main>
        {children}
        <Footer />
      </main>
      <CookieBanner />
    </>
  )
}
export default Layout