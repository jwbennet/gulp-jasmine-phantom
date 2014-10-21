'use strict';

// Jasmine references the index.js in this repository
var gulp = require('gulp'),
    minijasmine = require('gulp-jasmine'),
    jasmine = require('../');


// Default unit test
gulp.task('unit', function() {
    return gulp.src('specs/unit/**.js').pipe(jasmine());
});

// Unit test and keep the specRunner
gulp.task('test-unit-path', function() {
  return gulp.src('specs/unit/**.js')
    .pipe(jasmine({
      keepRunner: './'
    }));
});

// Passing options in specifying integration tests
gulp.task('test-integration', function() {
  return gulp.src('specs/integration/integration.js')
    .pipe(jasmine({
      integration: true,
      keepRunner: false
    }));
});

//Keeps spec runner at a specific path
gulp.task('test-path', function() {
  return gulp.src('specs/integration/integration.js')
    .pipe(jasmine({
      integration: true,
      keepRunner: './'
    }));
});

//Use require in an integration test
gulp.task('test-require', function() {
  return gulp.src('specs/integration/require-integration.js')
    .pipe(jasmine({
      integration: true,
      vendor: 'example/vendor/*.js',
      keepRunner: './'
    }));
});

//Watch task
gulp.task('dev', function() {
    gulp.watch('specs/unit/*.js', ['test-require']);
});

gulp.task('multiple', ['default', 'test-integration']);

gulp.task('all', ['unit', 'test-unit-path', 'test-integration', 'test-path', 'multiple']);

gulp.task('default', []);
