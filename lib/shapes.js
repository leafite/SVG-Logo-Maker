class Circle {
    constructor(radius, color, text, textColor) {
      this.radius = 180;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      let svg = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  
      // Add text inside the circle
      if (this.text) {
        svg += `<text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }  
      return svg;
    }
  }

  class Square {
    constructor(sideLength, color, text, textColor) {
      this.sideLength = 175;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      // Render SVG square with specified side length and color
      let svg = `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  
      // Add text inside the square
      if (this.text) {
        const textX = 50 + this.sideLength / 2; 
        const textY = 50 + this.sideLength / 2; 
        svg += `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
  
      return svg;
    }
  }
