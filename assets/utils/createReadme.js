// Function to take user input data from and add it into the contents of the README file
function createReadme(data) {
    let readmeContent = `
# ${data.title}

badge goes here

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`;

    // Add description section (if it exists)
    if (data.description !== null) {
        readmeContent = readmeContent + `
## Description
${data.description}
`;    
    }

    // Add installation section (if it exists)
    if (data.installation !== null) {
        readmeContent = readmeContent + `
## Installation
${data.installation}
`;    
    }

    // Add usage section (if it exists)
    if (data.usage !== null) {
        readmeContent = readmeContent + `
## Usage
${data.usage}
`;    
    }

    // Add license section (if it exists)
    if (data.license !== null) {
        readmeContent = readmeContent + `
## License
${data.license}
`;    
    }

    // Add contributing section (if it exists)
    if (data.contributing !== null) {
        readmeContent = readmeContent + `
## Contributing
${data.contributing}
`;    
    }

     // Add tests section (if it exists)
     if (data.tests !== null) {
        readmeContent = readmeContent + `
## Tests
${data.tests}
`;    
    }   

    // Add questions section (if it exists)
    if (data.questions !== null) {
        readmeContent = readmeContent + `
## Questions
GitHub: ${data.username}\
Email: ${data.email}
`;
    }

    return readmeContent;
}

// Make the createReadme function accessible outside of script 
module.exports = createReadme;