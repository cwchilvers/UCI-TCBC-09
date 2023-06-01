// Function to take user input data from and add it into the contents of the README file
function createReadme(data) {
    const readmeContent = `
# ${data.title}

badge goes here

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: ${data.username}\
Email: ${data.email}`;

    return readmeContent;
}

// Make the createReadme function accessible outside of script 
module.exports = createReadme;