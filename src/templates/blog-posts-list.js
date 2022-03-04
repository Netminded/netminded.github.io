import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Pagination from '../components/blog/pagination'
import Tags from '../components/blog/tags'
import AuthorSection from '../components/blog/author'

const BlogPage = ({data, pageContext}) => {
    const {currentPage, numPages} = pageContext
    const firstPost = data.allMdx.nodes[0]
    return (
        <Layout pTitle="Blog" isArticle={false} simpleNav={true}>
            <div className="container">
              <div className="row blog-page">
                  {currentPage === 1 ? <>
                    <div className="col-lg-7">
                        <article className="featured-post" key={firstPost.id} itemScope itemType="http://schema.org/Article">
                            <Link to={`/blog/${firstPost.slug}`}>    
                                <GatsbyImage className="featured-post-hero" image={getImage(firstPost.frontmatter.hero_image)} alt={firstPost.frontmatter.hero_image_alt} />
                            </Link>
                            <div className="featured-post-info">
                                <h2 className="featured-post-title">
                                    <Link className="featured-post-title--link" to={`/blog/${firstPost.slug}`}>
                                        {firstPost.frontmatter.title}
                                    </Link>
                                </h2>
                                <Tags tags={firstPost.frontmatter.tags} />
                                <AuthorSection author={firstPost.frontmatter.author} 
                                    posted={firstPost.frontmatter.date} reading={firstPost.fields.readingTime.text} />
                                <p className="featured-post-excerpt">{firstPost.excerpt}</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-5">
                        <ul className="featured-post-list">
                            {
                                data.allMdx.nodes.filter(node => node.id !== firstPost.id).map(node => (
                                    <article className="featured-post-list-item" key={node.id} itemScope itemType="http://schema.org/Article">
                                        <Link className="featured-post-list-hero--link" to={`/blog/${node.slug}`}>
                                            <GatsbyImage className="featured-post-list-hero" image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} />
                                        </Link>
                                        <div className="featured-post-list-info">
                                            <h3 className="featured-post-list-title">
                                                <Link className="featured-post-list-title--link" to={`/blog/${node.slug}`}>
                                                    {node.frontmatter.title}
                                                </Link>
                                            </h3>
                                            <hr className="featured-post-list-divider" />
                                            <p>{node.frontmatter.date} · {node.fields.readingTime.text}</p>
                                        </div>
                                    </article>
                                ))
                            }
                        </ul>
                    </div>
                  </>: ""}
              </div>
              <Pagination currentPage={currentPage} numPages={numPages} />
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