import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `choidh GatsbyJS`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
            "gatsby-plugin-sitemap", 
            "gatsby-plugin-styled-components",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
          ]
};

export default config;
