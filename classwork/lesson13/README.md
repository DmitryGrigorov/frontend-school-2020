## Краткое руководство 

[Ссылка на страницу с командами npm https://devhints.io/npm ](https://devhints.io/npm ) 

Для того, чтобы инициализировать проект вводим команду:
`npm init`

Быстрая инициализация:
`npm init -y`

Установка пакета без добавления в package.json:
`npm i <package-name>`
или
`npm install <package-name>`

Установка пакета в devDependencies:
`npm i -D <package-name>`
или
`npm install --save-dev <package-name>`

Установка пакета в dependencies:
`npm i -S <package-name>`
или
`npm install --save <package-name>`

Удалить пакет из проекта:
`npm uninstall <package-name>`

## Краткое руковдство по Webpack проекту:

Перейти в папку webpack:

#### Установить все модули

`npm i`

#### Запуск проекта в dev-режиме 

`npm start`
или
`npm run start`

#### Собрать сборку для прода

`npm run build`



###### P.S.: Добавлено описание в файлах вебпака:
- webpack.config.js
- webpack.development.js
- webpack.production.js