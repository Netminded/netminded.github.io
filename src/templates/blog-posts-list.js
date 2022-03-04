import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Pagination from '../components/blog/pagination'
import Tags from '../components/blog/tags'
import AuthorSection from '../components/blog/author'

const BlogPage = ({data, pageContext}) => {
    const {currentPage, numPages} = pageContext
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
                                <Tags tags={node.frontmatter.tags} />
                                <AuthorSection author={node.frontmatter.author} 
                                    posted={node.frontmatter.date} reading={node.fields.readingTime.text} />
                                <p>{node.excerpt}</p>
                            </article>
                        ))
                    }
                  </ul>
                  <Pagination currentPage={currentPage} numPages={numPages} />
                </div>
              </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
        ) {
            nodes {
                slug
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    author
                    hero_image_alt
                    hero_image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    tags
                }
                id
                excerpt
                fields {
                    readingTime {
                        text
                    }
                }
            }
        }
    }
`

export default BlogPage