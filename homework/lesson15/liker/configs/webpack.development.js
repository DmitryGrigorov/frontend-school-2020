module.exports = env => {
  console.log("ENN from webpack.development.js: ", env);

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
};
