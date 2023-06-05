// Function to take user input data from and add it into the contents of the README file
function createReadme(data) {
 
// Create beginning of README    
    let readmeContent = `# ${data.title}

badge goes here

## Table of Contents`;

// Create table of contents for sections that exist
    if (data.description !== '') {
        readmeContent = readmeContent + `
* [Description](#description)`;    
    }

    if (data.installation !== '') {
        readmeContent = readmeContent + `
* [Installation](#installation)`;    
    }

    if (data.usage !== '') {
        readmeContent = readmeContent + `
* [Usage](#usage)`;    
    }

    if (data.license !== '') {
        readmeContent = readmeContent + `
* [License](#license)`;    
    }

    if (data.contributing !== '') {
        readmeContent = readmeContent + `
* [Contributing](#contributing)`;    
    }

     if (data.tests !== '') {
        readmeContent = readmeContent + `
* [Tests](#tests)`;    
    }   

    if (data.questions !== '') {
        readmeContent = readmeContent + `
* [Questions](#questions)`;
    }

// Add a break
readmeContent = readmeContent + `
`;    

// Add sections
    // Add description section (if it exists)
    if (data.description !== '') {
        readmeContent = readmeContent + `
## Description
${data.description}
`;    
    }

    // Add installation section (if it exists)
    if (data.installation !== '') {
        readmeContent = readmeContent + `
## Installation
${data.installation}
`;    
    }

    // Add usage section (if it exists)
    if (data.usage !== '') {
        readmeContent = readmeContent + `
## Usage
${data.usage}
`;    
    }

    // Add license section (if it exists)
    if (data.license !== '') {
        readmeContent = readmeContent + `
## License
${data.license}
`;    
    }

    // Add contributing section (if it exists)
    if (data.contributing !== '') {
        readmeContent = readmeContent + `
## Contributing
${data.contributing}
`;    
    }

     // Add tests section (if it exists)
     if (data.tests !== '') {
        readmeContent = readmeContent + `
## Tests
${data.tests}
`;    
    }   

    // Add questions section (if it exists)
    if (data.questions !== '') {
        readmeContent = readmeContent + `
## Questions
GitHub: ${data.username}
Email: ${data.email}`;
    }

    return readmeContent;
}

// Make the createReadme function accessible outside of script 
module.exports = createReadme;