export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.pug}`
		},
		open: false,
		notify: false,
		port: 3000,
	});
}