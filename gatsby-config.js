module.exports = {
  siteMetadata: {
      title: `netminded-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-0C3LYT2WQ6"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};