//Подключение
const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const browserSync = require("browser-sync").create();
const sourcemps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const rename = require("gulp-rename");

//Порядок подключения файлов со стилями
const styleFiles = ["./src/sass/main.scss"];

//Таск для обаботки стилей
gulp.task("styles", () => {
  //Шаблон для поиска файлов CSS
  return (
    gulp
      .src(styleFiles)
      .pipe(sourcemps.init())
      .pipe(sass())
      //Обьединениние файлов в один
      .pipe(concat("main.css"))
      //Добавить префиксы
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 version"],
          cascade: false
        })
      )
      // Сохраняем не сжатый файл
      .pipe(gulp.dest("./css"))
      //Минификация CSS
      .pipe(
        cleanCSS({
          level: 2
        })
      )
      .pipe(sourcemps.write("./"))
      .pipe(
        rename({
          suffix: "min"
        })
      )
      // Выходная папка
      .pipe(gulp.dest("./css/cssmin"))
      .pipe(browserSync.stream())
  );
});

// Таск для очистки папки CSS
gulp.task("del", () => {
  return del(["css/*"]);
});

// Таск для отслеживания изменений в файлах
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  // Следить за файлами стилей
  gulp.watch("./src/sass/*.scss", gulp.series("styles"));
  //При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on("change", browserSync.reload);
});

// Start таск, запускает del, styles, watch
gulp.task("start", gulp.series("del", "styles", "watch"));
