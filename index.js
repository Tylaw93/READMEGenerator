const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is this project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is this project tested?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: ["Apache 2.0", "GNU GPL v2","MIT", "No License"],
    },
   
    
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err?console.error(err):console.log('Thank you!')});
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        let inputString = generateMarkdown(answers);

        writeToFile("README.md", inputString)
    })
}

init();