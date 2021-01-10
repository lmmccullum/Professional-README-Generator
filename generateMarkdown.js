// function to generate markdown for README

// 'MIT License', "APACHE 2.0", "None"
function generateMarkdown(data) {
  if (data.licenses === "MIT License") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "APACHE 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

    
  return `# Table of Contents
  1. [Details](#Details)
  2. [Installation](#Installation)
  3. [Benefits](#Benefits)
  4. [Licenses](#Licenses)
  5.[Contributions](#Contributions)
  6. [Test](#Test)
  7. [Github](#Github)
  8. [Email](#Email)
  
  # ${data.title}

# Details
${data.details}

# Installation
${data.installation}

# Benefits
${data.benefits}

# Licenses
${data.licenses}

# Contributions
${data.contributions}

# Test
${data.test}

# Github
${data.github}

# Email
${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  