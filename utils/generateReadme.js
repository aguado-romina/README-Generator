function generateReadme(answers) {
    return `

${answers.title}
  

## Description
${answers.description}
## Table of Contents
- [Description](#description) done
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
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Languages
${answers.languagues.join(', ')}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Learnings
${answers.learned}
## Questions
${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
    `;
  }
  
  module.exports = generateReadme;
