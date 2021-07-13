// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "None") {
  return '[Github License](https://img.shields.io/badge/license-${license}%7D-blue/svg)'
}
return ''
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "Nonce") {
    return (
      '\n* [license](#license)\n'
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None") {
  return (
    `## License
  This project is Licensed under ${license}.`
  )
}
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}
## Table of Contents 
*[Installation](#installation)
*[Usage](#usage)
${renderLicenseLink(data.License)}
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)
## Installation
Install dependencies, run this command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Test
Run Test, Run this Command 
\`\`\`
${data.test}
\`\`\`
## Questions
Any Questions about repo, open an issue and contact me directly at  ${data.email}.


`;
}

module.exports = generateMarkdown;
