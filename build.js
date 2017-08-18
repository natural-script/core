const os = require('os');
const shell = require('shelljs');
const figlet = require('figlet');

figlet('JSTE FRAMEWORK', function(err, data) {
console.log(data);
console.log(' Starting building Jste Framework ');
shell.cd('dist');
shell.rm('-rf', '*');
shell.exec('vulcanize ../src/Res.html  --strip-comments --inline-scripts --inline-css > framework.html');
console.log(' Jste Framework has been built properly ;) ');
});
