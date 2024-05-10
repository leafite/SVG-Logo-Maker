const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('Rendering circle with color', () => {
    const circle = new Circle(50); 
    circle.setColor('red');
    const renderedSVG = circle.render();
    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(renderedSVG).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
  test('Rendering triangle with color', () => {
    const triangle = new Triangle(100); 
    triangle.setColor('blue');
    const renderedSVG = triangle.render();
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    expect(renderedSVG).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('Rendering square with color', () => {
    const square = new Square(80);
    square.setColor('green');
    const renderedSVG = square.render();
    const expectedSVG = '<rect x="50" y="50" width="80" height="80" fill="green" />';
    expect(renderedSVG).toEqual(expectedSVG);
  });
});
