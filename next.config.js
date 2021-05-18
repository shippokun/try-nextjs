/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src/"),
    };
    return config;
  },
};
