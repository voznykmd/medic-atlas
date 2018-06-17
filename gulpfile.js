var gulp = require('gulp'),
  //gulpprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),  
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),  
  shortcss = require('postcss-short'),
  sourcemaps = require('gulp-sourcemaps'),
  cssmin = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
	watch = require('gulp-watch'),
  rimraf = require('rimraf'),
	browserSync  = require('browser-sync'),
  reload = browserSync.reload,
  es = require('event-stream'),
  rigger = require('gulp-rigger'),
  rename = require("gulp-rename"),
  concat       = require('gulp-concat'),
  uglify       = require('gulp-uglifyjs'),
  babel = require('gulp-babel');

var path = {
    dist: { 
        css:   'dist/',
        js:    'dist/js/',
        html:  'dist/',
        img:   'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { 
        sass:  'app/style/style.scss',
        css:   'app/style/**/*.css',
        js:    'app/js/**/*.js',
        html:  ['app/**/*.html','!app/template/**/*.html'],
        img:   'app/img/**/*',
        fonts: 'app/fonts/**/*'
    },
    watch: { 
        sass:  'app/style/**/*.scss',
        css:   'app/style/**/*.css',
        js:    'app/js/**/*.js',
        html:  'app/**/*.html',
        img:   'app/img/**/*',
        fonts: 'app/fonts/**/*'
    },
    clean: './dist'
};
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('browser-sync', function() {
		browserSync({    
				server: {
						baseDir: "./dist"
				},
        host: 'localhost',
        port: 3000,
        startPath: '/',
				//tunnel: true,  
        //notify: false
				//files: ['dist/**/*.html','dist/js/**/*.js','dist/css/**/*.css']
		});
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('sass', function(){
  var plugins = [
    shortcss,    
    autoprefixer({browsers: ['last 4 version'], cascade: false})
  ];
  /*
  // SASS + css(normalize,reset or other)
  var cssStream  = gulp.src(path.src.css);
  var sassStream = gulp.src(path.src.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //.pipe(gulpprefixer())
    .pipe(postcss(plugins))
    .pipe(cssmin({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(sourcemaps.write());    
  

  return es.merge(sassStream, cssStream)           
           .pipe(gulp.dest(path.dist.css))
           .pipe(reload({stream: true}))
  */       


  //Only SASS         
  return gulp.src(path.src.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //.pipe(gulpprefixer())
    .pipe(postcss(plugins))
    .pipe(cssmin({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(path.dist.css))
    .pipe(reload({stream: true}))  
  
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('scripts', function() {
  return gulp.src(path.src.js)
    // .pipe(babel({
    //   presets: ['env']
    // }))
    //.pipe(concat('app.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .pipe(reload({stream: true}))
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('htmldist', function() {
  return gulp.src(path.src.html)
    //.pipe(rigger())                   //include template
    .pipe(gulp.dest(path.dist.html))
    .pipe(reload({stream: true}))    
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('image', function () {
  return gulp.src(path.src.img)
        // .pipe(imagemin({
        //   progressive: true,  //.jpg
        //   svgoPlugins: [{removeViewBox: false}],   //.svg
        //   interlaced: true,  //.gif
        //   optimizationLevel: 3 
        //  }))
        .pipe(gulp.dest(path.dist.img))
        .pipe(reload({stream: true}))        
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('fontsdist', function() {
  return gulp.src(path.src.fonts)   
    .pipe(gulp.dest(path.dist.fonts))
    .pipe(reload({stream: true}))
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('build', ['sass', 'htmldist', 'scripts', 'image', 'fontsdist']);
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch(path.watch.sass, ['sass']);
  //gulp.watch(path.watch.сss, ['sass']);
  gulp.watch(path.watch.js, ['scripts']);
  gulp.watch(path.watch.html, ['htmldist']);
  gulp.watch(path.watch.img, ['image']);
  gulp.watch(path.watch.fonts, ['fontsdist']);
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
////////////////////////////////SCORPIO79//////////////////////////////////////
gulp.task('default', ['build', 'browser-sync', 'watch']);
////////////////////////////////SCORPIO79//////////////////////////////////////