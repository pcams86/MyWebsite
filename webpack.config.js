const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "font-awesome": path.resolve(
        __dirname,
        "node_mudles",
        "font-awesome",
        "css",
        "font-awesome.min.css"
      ),
    },
  },
};
