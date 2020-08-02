const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: path.resolve('script/custom-amdx-loader.js'),
          options: {
            amp: true,
          },
        },
      ],
    });
    return config;
  },
};
