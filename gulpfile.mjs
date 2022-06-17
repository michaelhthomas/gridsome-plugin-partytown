import gulp from "gulp";
const { src, dest, series, parallel, watch } = gulp;
import plumber from "gulp-plumber";
import typescript from "gulp-typescript";
import eslint from "gulp-eslint";

const destFolder = "./dist"

const tsProject = typescript.createProject("./tsconfig.json")

const js = () => {
	return src(["src/gridsome.{client,server}.ts"])
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(tsProject())
		.pipe(dest(destFolder));
}

const copyPackageFiles = () =>
	src([
		"package.json",
		"LICENSE",
		"README.md",
		"CHANGELOG.md"
	])
		.pipe(dest(destFolder));

const build = parallel(js, copyPackageFiles);

const watchFiles = () => {
	watch("src/**/*.ts", js);
};

const start = series(build, watchFiles);

export { start, build };