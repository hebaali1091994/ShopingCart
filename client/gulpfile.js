//top function[task- src-dst-watch]
const gulp=require('gulp')
const gulpsass=require("gulp-sass")
const sass=gulpsass(require('sass'))

//name function
// gulp.task('log',async function(){

// })
// gulp.task('move',async function(){

//     gulp.src('').pipe(gulp.dest( ))
// })
gulp.task('sass', async function(){
    gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})