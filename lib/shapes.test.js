const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
  describe('Circle', () => {
    test('Rendering circle with color', () => {
      const circle = new Circle(50); 
      circle.color = 'red'; // Set color property directly
      const renderedSVG = circle.render();
      const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
      expect(renderedSVG).toEqual(expectedSVG);
    });
  });

  describe('Triangle', () => {
    test('Rendering triangle with color', () => {
      const triangle = new Triangle(100); 
      triangle.color = 'blue'; // Set color property directly
      const renderedSVG = triangle.render();
      const expectedSVG = '<polygon points="150,20 100,180 200,180" fill="blue" />';
      expect(renderedSVG).toEqual(expectedSVG);
    });
  });

  describe('Square', () => {
    test('Rendering square with color', () => {
      const square = new Square(80, 'green'); // Pass color during object creation
      const renderedSVG = square.render();
      const expectedSVG = '<rect x="50" y="50" width="80" height="80" fill="green" />';
      expect(renderedSVG).toEqual(expectedSVG);
    });
  });
});
