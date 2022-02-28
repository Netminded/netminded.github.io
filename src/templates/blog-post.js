import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
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
                    </div>
                </div>
            </div>
      </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
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
  }
`

export default BlogPost