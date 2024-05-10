const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { createSVG } = require('./lib/svgGenerator'); // You'll need to create this function

// Function to prompt user for input
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):'
    }
  ]);

  return answers;
}

async function main() {
  try {
    // Prompt user for input
    const { text, textColor, shape, shapeColor } = await promptUser();

    // Generate SVG based on user input
    const svg = createSVG(text, textColor, shape, shapeColor);

    // Write SVG to file
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

// Call the main function to start the application
main();

module.exports = { promptUser }; 
