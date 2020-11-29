const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'tittle',
      message: 'What is your project tittle?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter your Personal name',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a short description explaining the what, why, and how. What makes your project stand out?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you build this project? What problem does it solve?',
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
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
    },
    
    
    
  ]);

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${answers.tittle}</h1>
    <h2 class="lead">${answers.name}.</h2>
  
    <p class="lead">${answers.description}.</p>
    <p class="lead">${answers.motivation}.</p>
    <p class="lead">${answers.why}.</p>

    <h1 class="lead">Languages did you use for this project: </h1>
    <ul class="list-group">
    <li class="list-group-item"> ${answers.languagues}</li>
  </ul>

    <p class="lead">${answers.learned}.</p>
    
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${answers.github}</li>
    <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
  </ul>
    
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));



  // function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
