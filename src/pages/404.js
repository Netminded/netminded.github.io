import * as React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const NotFoundPage = () => {
    return (
        <Layout simpleNav={true}>
            <div className="page-not-found-div">
                <div>
                    <p className="page-not-found-icon"><FontAwesomeIcon icon={faUserNinja} /></p>
                    <h1 className="page-not-found-heading">Nothing To See Here...</h1>
                    <p className="page-not-found-text">Sorry the page you’re looking for cannot be found!</p>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const Head = () => (
    <SEO title="404 Page Not Found" article={false} />
)
