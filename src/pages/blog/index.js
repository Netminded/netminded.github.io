import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pTitle="Blog" isArticle={false} simpleNav={true}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul>
                    {
                        data.allMdx.nodes.map(node => (
                            <article key={node.id}>
                            <h2>
                              <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                              </Link>
                            </h2>
                            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} />
                            <p>Posted: {node.frontmatter.date}</p>
                          </article>
                        ))
                      }
                  </ul>
                </div>
              </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
        }
        id
      }
    }
  }
`

export default BlogPage