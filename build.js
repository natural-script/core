const fse = require('fs-extra');
const os = require('os');
const crypto = require('crypto')
const zlib = require('zlib');
const fs = require('fs');
const shell = require('shelljs');
const figlet = require('figlet');
const path = require("path");
const replace = require("replace");
const Datauri = require('datauri').sync;
const absolutePath = path.resolve(".");
const algorithm = 'sha1';

figlet('JSTE FRAMEWORK', function (err, data) {
    console.log(data);
    console.log(' Starting building Jste Framework ');
    shell.rm('-rf', 'temp');
    shell.mkdir('temp');
    shell.ln('-sf', absolutePath + '/src', 'temp/src');
    shell.cd('build');
    shell.rm('-rf', '*');
    shell.mkdir('minified', 'compressed');
    fse.copySync(absolutePath + '/src/JS/Core/analyzeCommand-CompilationTemplate.js', absolutePath + '/temp/analyzeCommand-Compiled.js');
    fse.copySync(absolutePath + '/src/JS/Core/wordsTranslationsInit-CompilationTemplate.js', absolutePath + '/temp/wordsTranslationsInit-Compiled.js');
    fse.copySync(absolutePath + '/src/Res.html', absolutePath + '/temp/Res.html');
    fse.copySync(absolutePath + '/src/Res-LiveVersion.html', absolutePath + '/temp/Res-LiveVersion.html');
    var langCodes = ['en', 'fr', 'ar', 'arz'];
    for (var i = 0; i < langCodes.length; i++) {
        replace({
            regex: langCodes[i].toUpperCase() + "_RIVESCRIPT",
            replacement: Datauri(absolutePath + '/src/JS/Translations/RiveScript/' + langCodes[i] + '.rive'),
            paths: [absolutePath + '/temp/analyzeCommand-Compiled.js'],
            recursive: true,
            silent: true,
        });
    }
    replace({
        regex: "DICTIONARY_URL",
        replacement: Datauri(absolutePath + '/src/JS/Translations/words.json'),
        paths: [absolutePath + '/temp/wordsTranslationsInit-Compiled.js'],
        recursive: true,
        silent: true
    });
    replace({
        regex: 'src="',
        replacement: 'src="src/',
        paths: [absolutePath + '/temp/Res.html', absolutePath + '/temp/Res-LiveVersion.html'],
        recursive: true,
        silent: true
    });
    replace({
        regex: 'href="',
        replacement: 'href="src/',
        paths: [absolutePath + '/temp/Res.html', absolutePath + '/temp/Res-LiveVersion.html'],
        recursive: true,
        silent: true
    });
    replace({
        regex: 'src/JS/Core/wordsTranslationsInit\.js',
        replacement: 'wordsTranslationsInit-Compiled.js',
        paths: [absolutePath + '/temp/Res.html', absolutePath + '/temp/Res-LiveVersion.html'],
        recursive: true,
        silent: true
    });
    replace({
        regex: 'src/JS/Core/analyzeCommand\.js',
        replacement: 'analyzeCommand-Compiled.js',
        paths: [absolutePath + '/temp/Res.html', absolutePath + '/temp/Res-LiveVersion.html'],
        recursive: true,
        silent: true
    });
    console.log(' Bundling the framework files into one HTML file ');
    shell.exec('polymer-bundler -r ' + absolutePath + '/temp Res.html  --strip-comments --inline-scripts --inline-css --rewrite-urls-in-templates > framework.html');
    console.log(' Minifying the framework bundled file ');
    shell.exec('html-minifier framework.html --remove-comments --minify-css --minify-js --remove-comments --use-short-doctype > minified/framework.min.html');
    shell.rm('-rf', 'framework.html');
    console.log(' Compresssing the framework minified file ');
    var gzip = zlib.createGzip();
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
    shell.exec('polymer-bundler -r ' + absolutePath + '/temp Res-LiveVersion.html  --strip-comments --inline-scripts --inline-css --rewrite-urls-in-templates > framework-LiveVersion.html');
    console.log(' Minifying the framework bundled file ');
    shell.exec('html-minifier framework-LiveVersion.html --remove-comments --minify-css --minify-js --remove-comments --use-short-doctype > minified/framework-LiveVersion.min.html');
    shell.rm('-rf', 'framework-LiveVersion.html');
    console.log(' Compresssing the framework minified file ');
    var gzip = zlib.createGzip();
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
    shell.exec('html-minifier ../utils/db-manager.html --remove-comments --minify-css --minify-js --remove-comments --use-short-doctype > minified/db-manager.min.html');
    shell.rm('-rf', 'db-manager.html');
    console.log(' Compresssing the BLOB DB Manager minified file ');
    var gzip = zlib.createGzip();
    var inp = fs.createReadStream('minified/db-manager.min.html');
    var out = fs.createWriteStream('compressed/db-manager.min.html.gz');
    inp.pipe(gzip).pipe(out);
    console.log(' Hashing the BLOB DB Manager compressed file ');
    var shasum = crypto.createHash(algorithm);
    shasum.update(fs.readFileSync('compressed/db-manager.min.html.gz', 'utf8'))
    fs.writeFileSync('compressed/db-manager.sha1', shasum.digest('hex'));
    console.log(' The BLOB DB Manager for Jste Framework Live Version has been built properly ;) ');
    shell.cd('../');
    shell.rm('-rf', 'temp');
});