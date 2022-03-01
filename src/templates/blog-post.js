import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    const { previous, next } = data
    return (
        <Layout pTitle={data.mdx.frontmatter.title} isArticle={true}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <p>Posted: {data.mdx.frontmatter.date}</p>
                        <GatsbyImage
                        image={image}
                        alt={data.mdx.frontmatter.hero_image_alt}
                        />
                        <MDXRenderer>
                        {data.mdx.body}
                        </MDXRenderer>
                        <div>
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
                        </div>
                    </div>
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
        hero_image_alt
        hero_image {
            childImageSharp {
                gatsbyImageData
            }
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
        }
    }
    next: mdx(id: { eq: $nextPostId }) {
        fields {
            slug
        }
        frontmatter {
            title
        }
    }
  }
`

export default BlogPost