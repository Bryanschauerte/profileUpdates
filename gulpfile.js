var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var ENV = process.env.NODE_ENV;
console.log(ENV, 'ENV')
// build public/main.css
gulp.task('styles', function() {
    console.log('Building styles...');
    if(ENV === 'prod'){
      gulp.src('app/main.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
          .pipe(gulp.dest('server/assets'))
          .pipe(browserSync.stream());
    }else{
      gulp.src('app/main.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
          .pipe(gulp.dest('public'))
          .pipe(browserSync.stream());
      }
});
// set react to production

gulp.task('apply-prod-environment', function() {
    process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
    process.env.NODE_ENV = 'production';
    if (process.env.NODE_ENV != 'production') {
        throw new Error("Failed to set NODE_ENV to production!!!!");
    } else {
        process.stdout.write("Successfully set NODE_ENV to production" + "\n");
    }
});


// watch for scss changes
gulp.task('serve', ['styles'], function() {
    require('chokidar-socket-emitter')({port: 8090});

    var express = require('express');
    var app = express();

    app.get('/', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendFile(__dirname + '/index.html');
    });

    // directory to serve static content
    app.use('/', express.static(__dirname + '/'));
    app.use('/assets', express.static(__dirname + '/server/assets'));

    // serve index.html on refresh

  var mongodb = require('mongodb');
  var mongoLABSURLINFO = require('./server/keys/hidden.js');
  var MongoClient = require('mongodb').MongoClient;
  var db;
  MongoClient.connect(mongoLABSURLINFO, (err, database) => {
  db= database

  })

  function profileDefaultData(req, res){
  if(db){
    db.collection('contents').find().toArray(function(err, results) {
        if (err) {
           return res.sendStatus(404);
        }
        if(results) {
          return res.send(results);
        }
        return res.send('Nothing in DB').sendStatus(200);
      })
  }else{
    return res.send('Try back later, DB down...').sendStatus(200);
  }
  }

    app.route('/getContents/profile').get(profileDefaultData);

    app.listen(3000, 'localhost');

    browserSync.init({
        open: false,
        reloadOnRestart: true,
        notify: false,
        proxy: {
            target: 'http://localhost:3000'
        }
    });

    gulp.watch('app/**/*.scss', ['styles'], function() {
        browserSync.reload;
    });

});

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['apply-prod-environment','styles']);

gulp.task('default',
    [ENV === 'prod' ? 'production' : 'development']
);
