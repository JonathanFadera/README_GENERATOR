//  packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like your repository title to be?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What would you like your project name to be?',
        name: 'name',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },
            { value: 'BSD3' },
            { value: 'LGPL' },
            { value: 'MIT' },
            { value: 'MPL' },
            { value: 'None' },
        ]
    },
    {
        type: 'input',
        message: 'Provide a description of your application:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How would you test this project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'List your collaborates',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where is this application deployed at?',
        name: 'deploy',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! Your README.md file has been generated!')
    );
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        })
        .catch((err) => {
            console.log(err);
        }
        );
}
init();
