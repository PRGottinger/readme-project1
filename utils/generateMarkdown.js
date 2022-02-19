// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {
  return `
  # ${userInput.title}

  ![badge](https://img.shields.io/badge/license-${userInput.license}-brightgreen)<br />
  
  ## Description
  
  ${userInput.description}
  
  ## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
  ## Installation

  ${userInput.installation}
  
  ## Usage
  
  ${userInput.usage}
  
  ## License

  ![badge](https://img.shields.io/badge/license-${userInput.license}-brightgreen)
<br />

 This project is covered by the ${userInput.license} license.
  
  ## Contributing
  
  ${userInput.contributing}

  ## Tests

  ${userInput.tests}

  ## Questions

  ${userInput.questions}<br />

  Find me on Github: [${userInput.username}](https://github.com/${userInput.username})<br />)

  Email me with any question about my project at: ${userInput.email}
  
 `;
};

module.exports = generateMarkdown;
