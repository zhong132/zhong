var gulp = require('gulp');
var load = require('gulp-load-plugins')();

gulp.task('concatCss',function (){//合并压缩css
    return gulp.src(['./css/*.css'])//读取文件
    .pipe(load.concat('SoftwareCenter.css'))//合并文件
    .pipe(load.minifyCss())//压缩文件
    .pipe(gulp.dest('./dest/css'))//写入dist/css目录
    .pipe(load.connect.reload())
});
// gulp.task('swiper_css',function (){//压缩swiper.css
//     return gulp.src('./css/swper*.css')
//     .pipe(load.minifyCss())
//     .pipe(load.rename('swiper.mim.css'))
//     .pipe(gulp.dest('./dest/css'));
// });
gulp.task('concatJs',function (){//合并压缩js
    return gulp.src(['./js/*.js','!./js/jquery*.js','!./js/swiper*.js'])
    .pipe(load.babel({presets: ['@babel/preset-env']}))
    .pipe(load.concat('SoftwareCenter.js'))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dest/js'))
    .pipe(load.connect.reload())
});
gulp.task('uglifyJq',function (){//压缩jq
    return gulp.src(['./js/jquery*.js'])
    .pipe(load.uglify())
    .pipe(load.rename('jquery-2.1.4.mim.js'))
    .pipe(gulp.dest('./dest/js'));
});
gulp.task('swiper_js',function (){//压缩swiper.js
    return gulp.src(['./js/swiper*.js'])
    .pipe(load.uglify())
    .pipe(load.rename('swiper.mim.js'))
    .pipe(gulp.dest('./dest/js'));
});
gulp.task('minifyHtml',function (){//压缩html
    return gulp.src('./*.html')
    .pipe(load.minifyHtml())
    .pipe(gulp.dest('./dest'))
    .pipe(load.connect.reload())
})
gulp.task('imagemin',function (){//压缩图片
    return gulp.src('./img/*.*')
    .pipe(load.imagemin())
    .pipe(gulp.dest('./dest/img'))
    .pipe(load.connect.reload())
})
gulp.task('reload',function (cb){// 自动刷新
    load.connect.server({
        root: './dest',//根目录
        livereload: true
    });
    cb();
})

gulp.task('watchs',function (cb){
    gulp.watch('./css/*.css',gulp.series('concatCss'));
    gulp.watch('./js/*.js',gulp.series('concatJs'));
    gulp.watch('./*.html',gulp.series('minifyHtml'));
    gulp.watch('./img/*.*',gulp.series('imagemin'));
    cb();
})

gulp.task('start',gulp.series('reload','watchs'));

gulp.task('build',gulp.parallel(// 打包
    gulp.series('concatCss'),
    gulp.series('concatJs','uglifyJq','swiper_js'),
    gulp.series('minifyHtml'),
    gulp.series('imagemin')
));
