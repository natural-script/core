const inquirer = require("inquirer");
const crypto = require("crypto");
const gzipy = require("gzipy");
const fs = require("fs");
const shell = require("shelljs");
const figlet = require("figlet");
const isTravis = require("is-travis");
const algorithm = "sha1";
async function startBuild() {
  console.log(" ");
  console.log(" Starting building NaturalScript ");
  let buildInfo = {
    naturalScript: {
      minified: {},
      compressed: {}
    },
    dbManager: {
      minified: {},
      compressed: {}
    }
  };
  console.log(" Bundling the framework files into one JS file ");
  shell.exec(
    "npx webpack --config webpack.config.js --mode production --progress"
  );
  shell.cd("./dist");
  buildInfo.naturalScript.minified.size = fs.statSync("naturalScript.min.js").size;
  buildInfo.naturalScript.compressed.size = buildInfo.naturalScript.minified.size;
  console.log(" Hashing the framework minified file ");
  var shasum = crypto.createHash(algorithm);
  shasum.update(fs.readFileSync("naturalScript.min.js", "utf8"));
  buildInfo.naturalScript.minified.sha1 = shasum.digest("hex");
  console.log(" Hashing the framework compressed file ");
  var shasum = crypto.createHash(algorithm);
  shasum.update(fs.readFileSync("naturalScript.min.js.gz", "utf8"));
  buildInfo.naturalScript.compressed.sha1 = shasum.digest("hex");
  console.log(" NaturalScript has been built properly ;) ");
  console.log(" ");
  console.log(
    " Starting building the BLOB DB Manager for NaturalScript Live Version "
  );
  console.log(" Minifying the BLOB DB Manager file ");
  shell.exec(
    "html-minifier ../utils/db-manager.html --remove-comments --minify-css --minify-js" +
      " --remove-comments --use-short-doctype > db-manager.min.html"
  );
  buildInfo.dbManager.minified.size = fs.statSync("db-manager.min.html").size;
  buildInfo.dbManager.compressed.size = buildInfo.dbManager.minified.size;
  console.log(" Hashing the BLOB DB Manager minified file ");
  var shasum = crypto.createHash(algorithm);
  shasum.update(fs.readFileSync("db-manager.min.html", "utf8"));
  buildInfo.dbManager.minified.sha1 = shasum.digest("hex");
  shell.rm("-rf", "db-manager.html");
  console.log(" Compresssing the BLOB DB Manager minified file ");
  gzipy.compress("db-manager.min.html", "db-manager.min.html.gz", function(
    error
  ) {
    console.log(" Hashing the BLOB DB Manager compressed file ");
    var shasum = crypto.createHash(algorithm);
    shasum.update(fs.readFileSync("db-manager.min.html.gz", "utf8"));
    buildInfo.dbManager.compressed.sha1 = shasum.digest("hex");
    console.log(
      " The BLOB DB Manager for NaturalScript Live Version has been built properly ;) "
    );
    shell.cd("../");
    if (global.gitURLPrefix) {
      console.log(" ");
      console.log(" Updating the index ");
      shell.exec("git add .");
      console.log(" ");
      console.log(" Recording the change to the local repo ");
      shell.exec('git commit -m "' + global.commitMessage + '"');
      console.log(" ");
      console.log(" Pushing the updates to GitHub ");
      shell.exec("git push " + gitURLPrefix + "framework.git master");
    }
    if (shell.test("-d", "../manager")) {
      console.log(" ");
      console.log(" Preparing for building Jste Manager ");
      shell.cd("../manager");
      console.log(" ");
      console.log(" Updating framework file ");
      shell.cp("../framework/dist/naturalScript.min.js.gz", "src/assets");
      console.log(" ");
      console.log(" Starting building Jste Manager ");
      shell.exec("node build");
      if (global.gitURLPrefix) {
        console.log(" ");
        console.log(" Updating the index ");
        shell.exec("git add .");
        console.log(" ");
        console.log(" Recording the change to the local repo ");
        shell.exec('git commit -m "Updating Framework Files"');
        console.log(" ");
        console.log(" Pushing the updates to GitHub ");
        shell.exec("git push " + gitURLPrefix + "manager.git master");
      }
    }
    if (shell.test("-d", "../manager-cloud")) {
      console.log(" ");
      console.log(" Preparing for building Jste Manager Heroku version ");
      shell.cd("../manager-cloud");
      console.log(" ");
      console.log(" Updating framework file ");
      shell.cp(
        [
          "../framework/dist/naturalScript.min.js.gz",
          "../framework/dist/db-manager.min.html.gz"
        ],
        "assets"
      );
      fs.writeFileSync("buildInfo.json", JSON.stringify(buildInfo));
      if (global.gitURLPrefix) {
        console.log(" ");
        console.log(" Updating the index ");
        shell.exec("git add .");
        console.log(" ");
        console.log(" Recording the change to the local repo ");
        shell.exec('git commit -m "Updating Framework Files"');
        console.log(" ");
        console.log(" Pushing the updates to GitHub ");
        shell.exec("git push " + gitURLPrefix + "manager-cloud.git master");
      }
    }
    if (shell.test("-d", "../manager-phone")) {
      console.log(" ");
      console.log(" Preparing for building Jste Manager phone version ");
      shell.cd("../manager-phone/src");
      console.log(" ");
      console.log(" Updating framework file ");
      shell.cp(
        "../../framework/dist/naturalScript.min.js",
        "www/jxcore/assets"
      );
      console.log(" ");
      console.log(" Starting building Jste Manager phone version ");
      shell.exec("cordova build");
      shell.cd("../");
      shell.cp(
        "src/platforms/android/build/outputs/apk/debug/android-debug.apk",
        "build"
      );
      if (global.gitURLPrefix) {
        console.log(" ");
        console.log(" Updating the index ");
        shell.exec("git add .");
        console.log(" ");
        console.log(" Recording the change to the local repo ");
        shell.exec('git commit -m "Updating Framework Files"');
        console.log(" ");
        console.log(" Pushing the updates to GitHub ");
        shell.exec("git push " + gitURLPrefix + "manager-phone.git master");
      }
    }
  });
}

figlet("NaturalScript", function(err, data) {
  console.log(data);
  console.log("");
  console.log(" Welcome to NaturalScript builder :) ");
  if (isTravis) {
    startBuild();
  } else {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "deploy",
          message: "Do you want to deploy this build ?"
        }
      ])
      .then(options => {
        if (options.deploy == true) {
          inquirer
            .prompt([
              {
                type: "input",
                name: "commit_message",
                message: "Please enter the commit message "
              },
              {
                type: "input",
                name: "git_username",
                message: "Please enter your GitHub username "
              },
              {
                type: "password",
                name: "git_password",
                mask: "*",
                message: "Please enter your GitHub password "
              }
            ])
            .then(deploy_info => {
              global.gitURLPrefix =
                "https://" +
                deploy_info.git_username +
                ":" +
                deploy_info.git_password +
                "@github.com/project-jste/";
              global.commitMessage = deploy_info.commit_message;
              startBuild();
            });
        } else {
          startBuild();
        }
      });
  }
});
