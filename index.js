// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Include generateMarkdown script to use for its generateMarkdown function
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        const markdown = generateMarkdown(data);

        // Create README.md file and add markdown content into it
        fs.writeFile('./output/README.md', markdown, (err) =>
            // Inform user if there was an error or else inform user if README file was successfully created
            err ? console.error(err) : console.log('Successfully created README file. File can be found inside the output folder')
        );
    });
