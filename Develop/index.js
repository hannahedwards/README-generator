// requiring packages to run application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require ('./utils/generateMarkdown.js');

// added all questions wanted for this readme as well as a list of license
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What would you like to title your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the motivation behind this project?',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Any Important information that contributors should know?',
    },
    {
        type: 'input',
        name: 'Screenshots',
        message: 'screen shots',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Whats your email?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Whats the GitHub username attached to this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses would you like your project to have?',
        choices: ['Academic Free License v3.0', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'ISC', 'MIT', 'Open Software License 3.0'],
    },
];

// TODO: Create a function to write README file
//will alert you and not create the file if any errors are caught
function runInquirer() {
    return inquirer.prompt(questions)
    .then((values) => {
        const mark = MarkDown.generateReadme(values)
        fs.writeFile('newREADME.md', mark, function (error){
            if (error){
                console.log('OOPS! file not saved.', error)
            }else{
                console.log('NICE! your new readme file has been added in this folder!')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
}
//runs the application!
runInquirer()
