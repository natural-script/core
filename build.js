const os = require('os');
const crypto = require('crypto')
const zlib = require('zlib');
const fs = require('fs');
const shell = require('shelljs');
const figlet = require('figlet');
const path = require("path");
const srcAbsolutePath = path.resolve("./src");
const gzip = zlib.createGzip();
const algorithm = 'sha1';

figlet('JSTE FRAMEWORK', function (err, data) {
    console.log(data);
    console.log(' Starting building Jste Framework ');
    shell.cd('build');
    shell.rm('-rf', '*');
    shell.mkdir('minified', 'compressed');
    console.log(' Bundling the framework files into one HTML file ');
    shell.exec('polymer-bundler -r ' + srcAbsolutePath + ' Res.html  --strip-comments --inline-scripts --inline-css --rewrite-urls-in-templates > framework.html');
    console.log(' Minifying the framework bundled file ');
    shell.exec('html-minifier framework.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/framework.min.html');
    shell.rm('-rf', 'framework.html');
    console.log(' Compresssing the framework minified file ');
    var inp = fs.createReadStream('minified/framework.min.html');
    var out = fs.createWriteStream('compressed/framework.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Hashing the framework compressed file ');
    var shasum = crypto.createHash(algorithm);
    shasum.update(fs.readFileSync('compressed/framework.min.html.gz', 'utf8'))
    fs.writeFileSync('compressed/framework.sha1', shasum.digest('hex'));
    console.log(' Jste Framework has been built properly ;) ');
    console.log(' ');
    console.log(' Starting building Jste Framework Live Version ');
    console.log(' Bundling the framework files into one HTML file ');
    shell.exec('polymer-bundler -r ' + srcAbsolutePath + ' Res-LiveVersion.html  --strip-comments --inline-scripts --inline-css --rewrite-urls-in-templates > framework-LiveVersion.html');
    console.log(' Minifying the framework bundled file ');
    shell.exec('html-minifier framework-LiveVersion.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/framework-LiveVersion.min.html');
    shell.rm('-rf', 'framework-LiveVersion.html');
    console.log(' Compresssing the framework minified file ');
    var inp = fs.createReadStream('minified/framework-LiveVersion.min.html');
    var out = fs.createWriteStream('compressed/framework-LiveVersion.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Hashing the framework compressed file ');
    var shasum = crypto.createHash(algorithm);
    shasum.update(fs.readFileSync('compressed/framework-LiveVersion.min.html.gz', 'utf8'))
    fs.writeFileSync('compressed/framework-LiveVersion.sha1', shasum.digest('hex'));
    console.log(' Jste Framework Live Version has been built properly ;) ');
    console.log(' ');
    console.log(' Starting building the BLOB DB Manager for Jste Framework Live Version ');
    console.log(' Minifying the BLOB DB Manager file ');
    shell.exec('html-minifier ../utils/db-manager.html --remove-comments --minify-css --minify-js --remove-comments --minify-ur-ls --use-short-doctype > minified/db-manager.min.html');
    shell.rm('-rf', 'db-manager.html');
    console.log(' Compresssing the BLOB DB Manager minified file ');
    var inp = fs.createReadStream('minified/db-manager.min.html');
    var out = fs.createWriteStream('compressed/db-manager.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Hashing the BLOB DB Manager compressed file ');
    var shasum = crypto.createHash(algorithm);
    shasum.update(fs.readFileSync('compressed/db-manager.min.html.gz', 'utf8'))
    fs.writeFileSync('compressed/db-manager.sha1', shasum.digest('hex'));
    console.log(' The BLOB DB Manager for Jste Framework Live Version has been built properly ;) ');
});