// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this application?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for this application?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
     fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README.md file created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md' , markdown);
    });
}

// Function call to initialize app
init();
