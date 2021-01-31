function generateReadme(answers) {
  return `
## ${answers.title}

  

## Description
${answers.description}
## Table of Contents
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
<br />
This application is covered by the ${answers.license} license. 
## Languages
${answers.languagues.join(", ")}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Learnings
${answers.learned}
## Questions
${answers.questions}<br />
<br />
Find me on GitHub: [${answers.github}](https://github.com/${
    answers.github
  })<br />
<br />
Email me with any questions: ${answers.email}<br /><br />
_This README was generated with by [README-generator](https://https://github.com/aguado-romina/professionalREADMEgenerator) _
    `;
}

module.exports = generateReadme;
