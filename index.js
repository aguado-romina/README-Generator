const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);



const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'tittle',
      message: 'What is the project tittle?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a short description explaining the what, why, and how. What makes your project stand out?',
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
  },
  {
      type: "input",
      name: "usage",
      message: "What is this project usage for?"
  },
  {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
  },
  {
      type: 'checkbox',
      name: 'languagues',
      message: 'What languages did you use for this project?',
      choices: [
      {
        nme: 'HTML'
      },
      {
        name: 'CSS'
      },
      {
        name: 'javaScript'
      },
      {
        name: 'Node.js'
      }
    ]
  },
  {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
  },
  {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
  },
  {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? "
  },
  {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
  },
  {
      type: "input",
      name: "email",
      message: "Please enter your email: "
  }, 
  {
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
  }  
  ]);

async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await promptUser();
      const generateContent = generateReadme(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./dist/README.md', generateContent);
      console.log('✔️  Successfully wrote to README.md');
  }   catch(err) {
      console.log(err);
  }
}

init(); 