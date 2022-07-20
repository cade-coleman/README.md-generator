


const generateReadme = ({description,installation,usage,credits,features}) => 
`

# <Your-Project-Title>

## Description

${description}

## Installation

${installation}

## Usage

${usage}


## Credits

${credits}

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Features

${features}

## How to Contribute

to contribute please email cade@gmail.com the features you think would enhance the user experience!

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;


module.exports = generateReadme;