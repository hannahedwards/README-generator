class generateMarkDown {
  static generateReadme(values) {
    return `
# ${values.Title}
## Table of Contents
- [Description of this project](#Description)
- [How to install this project](#Installation)
- [How to use this project](#Usage)
- [How to condribute to this project](#Contribution)
- [Testing](#Tests)
- [Contact information](#Email, #GitHub)
- [Project license](#License)
## Description
${values.Description}
## Installation 
${values.Installation}
## Usage
${values.Usage}
## Contribution Guidelines
${values.Contribution}
## Questions about this application
${values.Email}
${values.GitHub}
## License
${values.License}
`}
} 
module.exports = generateMarkDown