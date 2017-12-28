var gulp = require("gulp");

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

gulp.task("default", ["copy-html"]);