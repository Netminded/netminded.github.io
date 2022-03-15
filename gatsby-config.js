module.exports = {
  siteMetadata: {
    title: `NetMinded · Create Innovative Customer Support Applications`,
    shortTitle: `NetMinded`,
    siteUrl: `https://netminded.co.uk`,
    titleTemplate: `%s · NetMinded`,
    description:
      `NetMinded automates your customer support and reduces the cost of scaling your business.`,
    image: `/netminded-og-image.jpg`,
    keywords: `Status,Services,Monitors,Internet,WiFi,Network,IT,Branded,Support,Productivity,NetMinder,NetMinded`,
    maskedIcon: `/safari-pinned-tab.svg`,
    authors: [
      {
        name: `Nick Randall`,
        social: `https://www.linkedin.com/in/nrandall`,
      },
      {
        name: `Tam Love`,
        social: `https://www.linkedin.com/in/tamlove`,
      },
      {
        name: `Ross Loveridge`,
        social: `https://www.linkedin.com/in/ross-loveridge-65159619b`,
      },
      {
        name: `NetMinded`,
        social: `https://www.linkedin.com/company/40932026`,
      },
    ]
  },
  plugins: [ 
    "gatsby-plugin-react-helmet", 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `NetMinded`,
      short_name: `NetMinded`,
      start_url: `/`,
      background_color: `#7b61ff`,
      theme_color: `#7b61ff`,
      lang: `en`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      cache_busting_mode: `query`,
    },
  },
    "gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "NetMinded Blog RSS Feed",
          },
        ],
      },
    },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:300,400,500,600`,
          `poppins\:400,500,600,700,800`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-123068375-4',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false
        },
        environments: ['production']
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/articles`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `netminded`
      }
    },
  ]
};