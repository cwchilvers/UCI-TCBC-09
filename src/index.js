const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const promptUser = require("./utils/promptUser");

// Prompt user for information and generate README file
promptUser()
    .then((data) => {
        // Paths
        const outputFolderPath = path.resolve(__dirname, '..', 'output');
        const readmeFilePath = path.join(outputFolderPath, 'README.md');
        
        // Create the output folder if it doesn't exist
        if (!fs.existsSync(outputFolderPath)) {
            fs.mkdirSync(outputFolderPath);
        }

        // Create README file
        console.log('Creating README file...');
        const markdown = generateMarkdown(data);
        fs.writeFileSync(readmeFilePath, markdown, 'utf-8');
        console.log('Successfully created README file. File can be found inside the output folder.');
    })
    .catch((err) => {
        console.error(err);
    });
