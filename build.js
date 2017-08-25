const os = require('os');
const shell = require('shelljs');
const figlet = require('figlet');

figlet('JSTE FRAMEWORK', function(err, data) {
console.log(data);
console.log(' Starting building Jste Framework ');
shell.cd('dist');
shell.rm('-rf', '*');
console.log(' Vulcanizing the framework files in to one HTML file ');
shell.exec('vulcanize ../src/Res.html  --strip-comments --inline-scripts --inline-css > framework.html');
console.log(' Minifying the framework vulcanized file ');
shell.exec('html-minifier framework.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > framework.min.html');
shell.rm('-rf', 'framework.html');
console.log(' Compresssing the framework minified file ');
shell.exec('cat framework.min.html | gzip --best > framework.min.html.gz');
shell.rm('-rf', 'framework.min.html');
console.log(' Jste Framework has been built properly ;) ');
});
