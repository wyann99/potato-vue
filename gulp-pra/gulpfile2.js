var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();

// var proxyPath = 'localhost';
// var basePath = '';

var PORT = '3000';


// 静态服务器
gulp.task('server',function(){
	browserSync.init({
		server:{
			baseDir:'localhost',
			index: 'index.html'
		},
		// proxy: proxyPath,
		port:PORT,
		open:'enternal'
	});
});

// gulp.task('www',['server']);

gulp.task('default',function(){ console.log('wangyanshigexiaochunmeng')});