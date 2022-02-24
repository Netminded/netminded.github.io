import * as React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => {
    return (
        <Layout pTitle="Privacy Policy" isArticle={false} simpleNav={true}>
            <div>
              <h2>Sorry the page you’re looking for does not exist.</h2>
            </div>
        </Layout>
    )
}

export default NotFoundPage
