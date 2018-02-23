var inquirer = require('inquirer');
inquirer
    .prompt([{
        type: 'confirm',
        name: 'deploy',
        message: 'Do you want to deploy this build ?'
    }])
    .then(options => {
        if (options.deploy == true) {
            inquirer
                .prompt([{
                        type: 'input',
                        name: 'git_username',
                        message: 'Please enter your GitHub username '
                    },
                    {
                        type: 'password',
                        name: 'git_password',
                        mask: '*',
                        message: 'Please enter your GitHub password '
                    }
                ]).then(git_credentials => {
                    global.git_credentials = git_credentials;
                })
        }
    });