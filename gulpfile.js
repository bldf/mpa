const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
// const gulpSequence = require('gulp-sequence');// 自从gulp 4.0 之后就可以指定同步或者异步了
const eslint = require('gulp-eslint');
const copy = ()=> {
	return gulp.src('./src/web/**/*.*')
            .pipe(gulp.dest('./dist/')) ;
}

//开发环境的gulp
gulp.task("builddev", () => {
    return watch('src/nodeuii/**/*.js', {
        ignoreInitial: false
    }, () => {
        return gulp.src('src/nodeuii/**/*.js')
            .pipe(babel({
                babelrc: false,
                "plugins": [
                    ["@babel/plugin-proposal-decorators", { "legacy": true }],
                    "transform-es2015-modules-commonjs"
                ]
            })).pipe(gulp.dest('dist'))
    })
});
gulp.task("builddevCopy", () => {
    return watch('src/web/**/*.*', {
        ignoreInitial: false
    }, copy)
});


//上线环境的Gulp
gulp.task("buildprod", () => {
    return gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            ignore: ['./src/nodeuii/config/index.js'],
            "plugins": [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                "transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('./dist'));
});
gulp.task("copyPackageJson",()=>{
    return gulp.src('./package.*')
            .pipe(gulp.dest('./dist/')) ;
})
//*************Begin 加载配置文件　***************** */
gulp.task("buildconfig", () => {
   return gulp.src('./src/nodeuii/**/*.js')
        .pipe(rollup({
            output: {
                format: "cjs"
            },
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ],
            input: './src/nodeuii/config/index.js'
        }))
        .pipe(gulp.dest('./dist'));
});
//************* 加载配置文件　End***************** */


gulp.task("lint", () => {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
//*************Begin 拷贝文件开始　***************** */
gulp.task('copy', copy);
//************* 拷贝文件开始　End***************** */

// let _task = ["builddevCopy",'builddev'];
let _task = ['builddev'];
let _series = 'parallel' ;//默认采用同步方式
// let _task = ['builddevCopy'];

if (process.env.NODE_ENV == "production") {
    _task =["buildprod", "buildconfig","copy",'copyPackageJson'];
    _series = 'series' ;
}
if (process.env.NODE_ENV == "lint") {
    _task = ["lint"];
    _series = 'series' ;
}
// gulp.task("default", _task);

gulp.task('default', gulp[_series](_task, (done)=>{
    // Do something after a, b, and c are finished.
      console.log('task　运行完成了')
      done();
  }));