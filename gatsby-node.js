const path = require(`path`)
const {
    createFilePath
} = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({
    graphql,
    actions,
    reporter
}) => {
    const {
        createPage
    } = actions

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const tagTemplate = path.resolve("src/templates/tag.js")

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: ASC }
            limit: 1000
          ) {
            nodes {
              id
              fields {
                slug
              }
            }
          }
          tagsGroup: allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
      `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }

    const posts = result.data.allMdx.nodes

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id
            const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

            createPage({
                path: `/blog${post.fields.slug}`,
                component: blogPost,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId,
                },
            })
        })
    }

// Extract tag data from query
    const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach(tag => {
            createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
    })
}

exports.onCreateNode = ({
    node,
    actions,
    getNode
}) => {
    const {
        createNodeField
    } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({
            node,
            getNode
        })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}