module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'storage.googleapis.com',
      'd2d8lea3wq2w6r.cloudfront.net',
      'ik.imagekit.io',
      'img.rarible.com',
    ]
  },
/*   webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }, */
  env: {
    apiUri: "https://os-socket-api.herokuapp.com/api",
  }
}
