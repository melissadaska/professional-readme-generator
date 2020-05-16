const inquirer = require('inquirer')

const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// create array of questions for the user
const questions = [
  // Pass your questions in here
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'describe',
    message: 'Please describe your project.'
  },
  {
      type: 'input',
      name: 'install',
      message: 'What are the steps required to install your project?'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.'
  },
  {
      type: 'input',
      name: 'credits',
      message: 'Include the links of any collaborators.'
  },
  {
      type: 'input',
      name: 'license',
      message: 'What is the license?'
  },
  {
      type: 'checkbox',
      name: 'badges',
      message: 'Are there any badges?'
      // if yes, include badges
  },
  {
      type: 'input',
      name: 'contrib',
      message: 'Would you like others to contribute? If yes, please describe how.'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Do you have any tests written for your application?'
  }
];

questions()
  .then(answers => {
    // Use user feedback for... whatever!!
  })

  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
