// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return ''; 
  }
};



function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GPL 3.0':
      return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return ''; 
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License\nThis project is licensed under the MIT License.\n${renderLicenseLink(license)}`;
    case 'Apache 2.0':
      return `## License\nThis project is licensed under the Apache 2.0 License.\n${renderLicenseLink(license)}`;
    case 'GPL 3.0':
      return `## License\nThis project is licensed under the GPL v3 License.\n${renderLicenseLink(license)}`;
    case 'BSD 3-Clause':
      return `## License\nThis project is licensed under the BSD 3-Clause License.\n${renderLicenseLink(license)}`;
    default:
      return ''; 
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions

For any questions, please contact me via Github : [${data.github}](https://github.com/${data.github})
Or by email: [${data.email}](mailto:${data.email})

`;
}

export default generateMarkdown;
