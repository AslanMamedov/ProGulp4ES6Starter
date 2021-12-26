// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

//------------------------------
const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

//------------------------------
export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		pug: `${buildFolder}/`,
		images: `${buildFolder}/assets/img/`,
		fonts: `${buildFolder}/assets/fonts/`,
		files: `${buildFolder}/assets/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/assets/img/{icons,images}/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/img/svg/*.svg`,
		pug: `${srcFolder}/pug/*.pug`,
		files: `${srcFolder}/assets/**/*.*`,
		svgicons: `${srcFolder}/assets/img/svg/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		pug: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/assets/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`
}
