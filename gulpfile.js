var gulp = require("gulp");
var webserver = require("gulp-server-livereload");
gulp.task("startServer", function () {
	return gulp.src("./src/")
		.pipe(webserver({
			host: "0.0.0.0",
			defaultFile: "cv.html",
			livereload: true,
			port: 8001
		}));
});

gulp.task("default", ["startServer"]);
