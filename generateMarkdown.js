// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

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
  