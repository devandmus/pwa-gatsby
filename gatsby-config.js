module.exports = {
  pathPrefix: "/pwa-gatsby",
  siteMetadata: {
    title: "pwa-gastby",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "PWA",
        short_name: "PWA",
        start_url: "./",
        scope: "./",
        background_color: "#317EFB",
        theme_color: "#317EFB",
        display: "standalone",
        icon: "src/assets/logo.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
  ],
};