const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./configs/webpack.${env}`)(env);

module.exports = (env) => {
  const { mode } = env;

  return webpackMerge(
    {
      mode,
      plugins: [new HtmlWebpackPlugin()],
      output: {
        filename: "bundle.js"
      },
    },
    modeConfig(mode)
  );
};