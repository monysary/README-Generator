// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license =>
  license === "NONE" ? "" : `![${license} License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;

// Function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license =>
  license === "NONE" ? "" : `[License](#License)`;

// Function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license =>
  license === "NONE" ? "" :
    `## License
    Licensed under ${license}.`;

// Function to generate markdown for README
const generateMarkdown = data =>
  `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)
  [Test](#Test)
  [Usage](#Usage)
  [Credits](#Credits)
  ${renderLicenseLink(data.license)}
  [Questions](#Questions)

  ## Installation
  Install dependencies by running the following command in terminal: 
  \`\`\`
  ${data.dependency}
  \`\`\`

  Access the webpage via the following link: ${data.url}

  ## Test
  Perform tests by running the following command in terminal: 
  \`\`\`
  ${data.test}
  \`\`\`

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Questions
  For questions, please email me at ${data.email}

  For other projects, please check out my GitHub at github.com/${data.username}
`;

module.exports = generateMarkdown;