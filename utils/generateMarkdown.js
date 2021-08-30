function renderLicenseBadge(license) {

    if(license ==="Apache 2.0") {
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } 
    else if (license === "GNU GPL v2") {
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
    }
    else if (license === "MIT") {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
    else (license === "No License") 
      return ( ``)
  
  }
  
  
  function generateMarkdown(data) {
  
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contributions)
  * [Test](#Test)
  * [License](#License)
  * [Contact](#Questions?)
  ## Installation
   ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribution}
  ## Test
  ${data.testing}
  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ## Contact
  Please feel free to contact me at ${data.email} for questions or feedback. 
  To see other projects, please visit https://github.com/${data.github}/.
  `;
  }
  
  module.exports = generateMarkdown;