const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: ['ui'],
};
