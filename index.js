const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
          type: 'input',
          name: 'user',
          message: 'What is your GitHub user name?'
      },
      {
          type: 'input',
          name: 'repo',
          message: 'What is your repository name?'
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
          message: 'Are there any collaborators?'
          // if yes, include links to GitHub profiles
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
          message: 'Would you like others to contribute?'
          // if yes, add guidelines on how to do so
      },
      {
          type: 'input',
          name: 'tests',
          message: 'Do you have any tests written for your application?'
      }
    ])
};

promptUser()
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

// // array of questions for user
// const questions = [

// ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
