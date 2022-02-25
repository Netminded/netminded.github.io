import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pTitle="Blog" isArticle={false} simpleNav={true}>
            <div>Blog</div>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                      </article>
                    ))
                }
            </ul>
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
        }
        id
        body
      }
    }
  }
`

export default BlogPage