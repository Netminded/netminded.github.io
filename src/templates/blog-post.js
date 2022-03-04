import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import AuthorSection from '../components/blog/author'
import Tags from '../components/blog/tags'

const BlogPost = ({data}) => {
    const heroImage = getImage(data.mdx.frontmatter.hero_image)
    const tags = data.mdx.frontmatter.tags
    const { previous, next } = data
    return (
        <Layout pTitle={data.mdx.frontmatter.title} isArticle={true}>
            <div className="container">
                <div className="row">
                    <article className="offset-2 col-8 blog-post" itemScope itemType="http://schema.org/Article">
                        <header>
                            <Tags tags={tags} />
                            <h2 className="blog-post-title">{data.mdx.frontmatter.title}</h2>
                            <AuthorSection author={data.mdx.frontmatter.author} 
                                posted={data.mdx.frontmatter.date} reading={data.mdx.fields.readingTime.text} />
                            <GatsbyImage className="blog-post-hero" image={heroImage} alt={data.mdx.frontmatter.hero_image_alt} />
                        </header>
                        <section className="blog-post-body">
                            <MDXRenderer>
                            {data.mdx.body}
                            </MDXRenderer>
                        </section>
                        <footer>
                            <ul
                                style={{
                                    display: `flex`,
                                    flexWrap: `wrap`,
                                    justifyContent: `space-between`,
                                    listStyle: `none`,
                                    padding: 0,
                                }}
                                >
                                <li>
                                    {previous && (
                                    <Link to={`/blog${previous.fields.slug}`} rel="prev">
                                        ← {previous.frontmatter.title}
                                    </Link>
                                    )}
                                </li>
                                <li>
                                    {next && (
                                    <Link to={`/blog${next.fields.slug}`} rel="next">
                                        {next.frontmatter.title} →
                                    </Link>
                                    )}
                                </li>
                            </ul>
                        </footer>
                    </article>
                </div>
            </div>
      </Layout>
    )
}

export const query = graphql`
  query (
      $id: String
      $previousPostId: String
      $nextPostId: String
  ) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        hero_image_alt
        hero_image {
            childImageSharp {
                gatsbyImageData
            }
        }
        tags
      }
      fields {
            readingTime {
                text
        }
      }
      body
    }
    previous: mdx(id: { eq: $previousPostId }) {
        fields {
            slug
        }
        frontmatter {
            title
            hero_image {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
    next: mdx(id: { eq: $nextPostId }) {
        fields {
            slug
        }
        frontmatter {
            title
            hero_image {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
  }
`

export default BlogPost