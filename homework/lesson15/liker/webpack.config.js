const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./configs/webpack.${env}`)(env);

module.exports = env => {
  const { mode } = env;

  return webpackMerge(
    {
      mode,
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          src: path.resolve(__dirname, "src")
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "template/template.html"
        })
      ],
      output: {
        filename: "bundle.js"
      }
    },
    modeConfig(mode)
  );
};
