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
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: [
        'MIT',
        'Apache',
        'Mozilla',
        'Unlicense'
      ]
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

// function to write README file
async function writeToFile(fileName, data) {
  await fs.promises.writeFile(fileName, data, 'utf-8');
}

// function to initialize program
async function init() {
  const answers = await inquirer.prompt(questions);
  const createMarkdown = generateMarkdown(answers);
  await writeToFile('README.md', createMarkdown);
}

// function call to initialize program
init();
