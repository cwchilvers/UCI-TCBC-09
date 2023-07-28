const inquirer = require('inquirer');

// Ask user for information
module.exports = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage information:',
            name: 'usage',
        },        
        {
            type: 'input',
            message: 'Contribution guidelines:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'License:',
            name: 'license',
            choices: [
                'APACHE 2.0',
                'GPL 3.0',
                'BSD 3',
                'None'
            ],
        },
    ]);
}