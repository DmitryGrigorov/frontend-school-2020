// корневой конфиг

// html-webpack-plugin — генирирует страницу html и по умолчанию подключает туда bundle.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

// для слияния конфигов
const webpackMerge = require("webpack-merge");

// mode-config взависимости от того, какую переменную мы передали будет запрашивать нужный нам конфиг;
const modeConfig = env => require(`./configs/webpack.${env}`)(env);

// mode говорит какую сборку запустить
// string = 'production': 'none' | 'development' | 'production'
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