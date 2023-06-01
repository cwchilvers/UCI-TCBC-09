const inquirer = require('inquirer');
const fs = require('fs');

// Get createReadme script to use for its createReadme function
const createReadme = require("./createReadme.js");

// Ask user for information
inquirer 
    .prompt([
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
    ])

    // Create README file
    .then((data) => {
        // Inform user that a README is being created
        console.log('Creating README file...')

        // Use createReadme function from separate script to create the markdown content to use in the README file. Pass the user input data into the fuction.
        readmeContent = createReadme(data);

        // Create README.md file and add markdown content into it
        fs.appendFile('README.md', readmeContent, (err) =>
            // Inform user if README file was created successsfully
            err ? console.error(err) : console.log('Successfully created README file')
        );
    });