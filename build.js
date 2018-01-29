const os = require('os');
const zlib = require('zlib');
const fs = require('fs');
const shell = require('shelljs');
const figlet = require('figlet');
const replace = require("replace");
const babel = require("babel-core");
const path = require("path");
const srcAbsolutePath = path.resolve("./src");
const gzip = zlib.createGzip(); 

figlet('JSTE FRAMEWORK', function (err, data) {
    console.log(data);
    console.log(' Starting building Jste Framework ');
    fs.writeFileSync(srcAbsolutePath + '/JS/Jste/Core/commandsExec-compiled.js', babel.transformFileSync(srcAbsolutePath + '/JS/Jste/Core/commandsExec.js', {presets: ["babel-preset-es2017"]}).code)
    replace({
        regex: "commandsExec.js",
        replacement: "commandsExec-compiled.js",
        paths: ['./src/Res.html', './src/Res-LiveVersion.html'],
        recursive: true,
        silent: true,
    });
    shell.cd('build');
    shell.rm('-rf', '*');
    shell.mkdir('minified', 'compressed');
    console.log(' Vulcanizing the framework files in to one HTML file ');
    shell.exec('vulcanize ' + srcAbsolutePath + '/Res.html  --strip-comments --inline-scripts --polymer2 > framework.html');
    console.log(' Minifying the framework vulcanized file ');
    shell.exec('html-minifier framework.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/framework.min.html');
    shell.rm('-rf', 'framework.html');
    console.log(' Compresssing the framework minified file ');
    var inp = fs.createReadStream('minified/framework.min.html');
    var out = fs.createWriteStream('compressed/framework.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Jste Framework has been built properly ;) ');
    console.log(' ');
    console.log(' Starting building Jste Framework Live Version ');
    console.log(' Vulcanizing the framework files in to one HTML file ');
    shell.exec('vulcanize ' + srcAbsolutePath + '/Res-LiveVersion.html  --strip-comments --inline-scripts --polymer2 > framework-LiveVersion.html');
    console.log(' Minifying the framework vulcanized file ');
    shell.exec('html-minifier framework-LiveVersion.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/framework-LiveVersion.min.html');
    shell.rm('-rf', 'framework-LiveVersion.html');
    console.log(' Compresssing the framework minified file ');
    var inp = fs.createReadStream('minified/framework-LiveVersion.min.html');
    var out = fs.createWriteStream('compressed/framework-LiveVersion.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Jste Framework Live Version has been built properly ;) ');
    console.log(' ');
    replace({
        regex: "commandsExec-compiled.js",
        replacement: "commandsExec.js",
        paths: [srcAbsolutePath + '/Res.html', srcAbsolutePath + '/Res-LiveVersion.html'],
        recursive: true,
        silent: true,
    });
    console.log(' Starting building the BLOB DB manager for Jste Framework Live Version ');
    console.log(' Minifying the BLOB DB manager file ');
    shell.exec('html-minifier ../utils/db-manager.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/db-manager.min.html');
    shell.rm('-rf', 'db-manager.html');
    console.log(' Compresssing the BLOB DB manager minified file ');
    var inp = fs.createReadStream('minified/db-manager.min.html');
    var out = fs.createWriteStream('compressed/db-manager.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' The BLOB DB manager for Jste Framework Live Version has been built properly ;) ');
});