import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import AuthorSection from '../components/blog/author'
import Tags from '../components/blog/tags'
import PostPagination from '../components/blog/post-pagination'
import AfterPostEntry from '../components/blog/post-after-entry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const BlogPost = ({data}) => {
    const fmatter = data.mdx.frontmatter
    const heroImage = getImage(fmatter.hero_image)
    const tags = fmatter.tags
    const tagsList = `${tags}`
    const { previous, next } = data
    return (
        <Layout pTitle={fmatter.title} pDescription={data.mdx.excerpt} pImage={getSrc(fmatter.hero_image)} pKeywords={tagsList} isArticle={true} simpleNav={true} >
            <div className="container">
                <div className="row">
                    <article className="offset-lg-2 col-lg-8 col-sm-12 blog-post" itemScope itemType="http://schema.org/Article">
                        <p className="blog-breadcrumbs"><Link to="/blog">Blog</Link> <FontAwesomeIcon icon={faChevronRight}/> <Link to={`/blog${data.mdx.fields.slug}`}>{fmatter.title}</Link></p>
                        <header>
                            <Tags tags={tags} />
                            <h2 className="blog-post-title">{fmatter.title}</h2>
                            <AuthorSection author={fmatter.author} 
                                posted={fmatter.date} reading={data.mdx.fields.readingTime.text} />
                            <GatsbyImage className="blog-post-hero" image={heroImage} alt={fmatter.hero_image_alt} />
                        </header>
                        <section className="blog-post-body">
                            <MDXRenderer>
                            {data.mdx.body}
                            </MDXRenderer>
                            <AfterPostEntry slug={data.mdx.fields.slug} title={fmatter.title} />
                        </section>
                        <footer>
                            <PostPagination prev={previous} next={next} />
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
            slug
      }
      body
      excerpt
    }
    previous: mdx(id: { eq: $previousPostId }) {
        fields {
            slug
        }
        frontmatter {
            title
            hero_image_alt
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
            hero_image_alt
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