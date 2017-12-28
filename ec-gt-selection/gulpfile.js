var gulp = require("gulp"),
    webpack = require("webpack"),
    webpackStream = require("webpack-stream");

var config = require("./webpack.config.js");

var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function(){
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("styles", function(){
    gulp.src("./src/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task("webpack", function(){
    return gulp.src("src/app.js")
        .pipe(webpackStream(config, webpack))
        .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["webpack"]);