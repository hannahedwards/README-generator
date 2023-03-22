//this is the layout for my readme file. it puts all th information in the right places.
class generateMarkDown {
  static generateReadme(values) {
    return `
# ${values.Title}
## Table of Contents
- [Description of this project](#Description)
- [How to install this project](#Installation)
- [Walk through video link](#walk-through)
- [How to condribute to this project](#Contribution)
- [Screen Shots of this project](#Screen-shots)
- [Questions](#Email)
- [My Github](#GitHub)
- [Project license](#License)
## Description
${values.Description}
## Installation 
${values.Contribution}
## Screen shots of this project
${values.Screenshots}
## Questions
Please feel free to reach out to me at: ${values.Email}
## My GitHub
Link to GitHub: https://github.com/${values.GitHub}
## License
${values.License}
`}
} 
//now our lovely new readme will be formated and created.
module.exports = generateMarkDown