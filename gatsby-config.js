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
    maskedIcon: `/safari-pinned-tab.svg`
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
  ]
};