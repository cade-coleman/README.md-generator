const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme')



const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'give installation and run details',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of how its used.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'add links to all who helped you on your projects.',
      },
      {
        type: 'input',
        name: 'features',
        message: 'what are the features youd like to point out?',
      },     
    ]);
  };

    

  const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('dist/README.md', generateReadme(answers)))
      .then(() => console.log('Successfully wrote README.md'))
      .catch((err) => console.error(err));
  };
  
  init();