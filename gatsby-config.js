module.exports = {
  siteMetadata: {
    title: "myGatsbySite",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "my-gatsby-site-s3",
      },
    },
  ],
};