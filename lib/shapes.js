class Circle {
    constructor(color, radius = 50) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      // Render SVG circle with specified radius and color
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(sideLength, color, text, textColor) {
      this.sideLength = sideLength;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      // Render SVG square with specified side length and color
      let svg = `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  
      // Add text inside the square
      if (this.text) {
        const textX = 50 + this.sideLength / 2; // Center text horizontally
        const textY = 50 + this.sideLength / 2; // Center text vertically
        svg += `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
  
      return svg;
    }
  }
  
  class Triangle {
    constructor(sideLength, color, text, textColor) {
      this.sideLength = sideLength;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      let svg = `<polygon points="150,20 100,180 200,180" fill="${this.color}" />`;
  
      // Add text inside the triangle
      if (this.text) {
        const textX = 150; // Center text horizontally
        const textY = 100; // Center text vertically
        svg += `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
  
      return svg;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
