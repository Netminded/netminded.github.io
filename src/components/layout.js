import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import SEO from './seo'
import CookieBanner from './cookies'

const Layout = ({ pTitle, pDescription, pKeywords, pImage, isArticle, simpleNav, isHero, scrollToProducts, children }) => {
  return (
    <>
      <SEO title={pTitle} description={pDescription} image={pImage} article={isArticle} keywords={pKeywords} />
      <Nav simpleNav={simpleNav} isHero={isHero} scrollToProducts={scrollToProducts} />
      <main>
        {children}
        <Footer />
      </main>
      <CookieBanner />
    </>
  )
}
export default Layout