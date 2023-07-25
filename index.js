const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const promptUser = require("./utils/promptUser");

// Prompt user for information and generate README file
promptUser()
    .then((data) => {
        console.log('Creating README file...');
        const markdown = generateMarkdown(data);
        fs.writeFile('./output/README.md', markdown, (err) =>
            err ? console.error(err) : console.log('Successfully created README file. File can be found inside the output folder')
        );
    });
