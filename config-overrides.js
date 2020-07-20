const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, "src", "app", "components"),
      screens: path.resolve(__dirname, "src", "app", "screens"),
      assets: path.resolve(__dirname, "src", "assets"),
      node_modules: path.resolve(__dirname, "node_modules"),
    },
  };

  return config;
};
