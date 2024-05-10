const fs = require('fs');

// Use dynamic import to import inquirer
async function promptUser() {
  const { default: inquirer } = await import('inquirer');

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
      name: 'shapeType',
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

const { Circle, Square, Triangle } = require('./lib/shapes');
async function main() {
    try {
        // Prompt user for input
        const { text, textColor, shapeType, shapeColor } = await promptUser();

        let svg;
        switch (shapeType.toLowerCase()) {
            case 'circle':
                const circle = new Circle(shapeColor);
                svg = circle.render();
                break;
            case 'square':
                const square = new Square(100, shapeColor, text, textColor);
                svg = square.render();
                break;
            case 'triangle':
                const triangle = new Triangle(100, shapeColor, text, textColor);
                svg = triangle.render();
                break;
            default:
                throw new Error('Invalid shape type');
        }

        // Write SVG to file
        fs.writeFileSync('logo.svg', svg);

        console.log('Generated logo.svg');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Call the main function to start the application
main();