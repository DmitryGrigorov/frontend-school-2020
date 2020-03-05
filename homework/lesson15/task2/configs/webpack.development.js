// делаем экспорт функции для dev сборки
module.exports = (env) => {
    console.log('ENN from webpack.development.js: ', env);

    // здесь подключен style-loader, который встраивает стили в DOM в инлайновом виде
    // например: <div style=" background: red; ">Hello</div

    // css-loader — позволяет подключить css файл через импорты.
    // что мы и сделали в index.js c помощью
    //  import style from './styles/style.css'

    // Цель состоит в том, чтобы все ассеты в вашем проекте преобразовывались вебпаком
    // хотя, это не означает, что они должны быть объединены).
    // Вебпак рассматривает каждый файл (.css, .html, .scss, .jpg, и т.д.) как модуль.
    // Однако, вебпак самостоятельно «понимает» только JavaScript.
    // Лоадеры в вебпаке преобразовывают файлы в модули, которые потом добавляются в граф зависимостей.
    // лоадеры подключаются ниже
    return ({
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
                        loader: 'babel-loader',
                    }
                }
            ]
        }
    });
};
