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
  
  class Triangle {
    constructor(sideLength, color, text, textColor) {
      const adjustedSideLength = Math.min(sideLength, 300 / Math.sqrt(3)); // Ensures triangle fits within 300px width
      this.sideLength = adjustedSideLength;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      const height = this.sideLength * Math.sqrt(3) / 2;
      const halfBase = 300 / 2;
      const topVertex = 100 + height / 2; // Center vertically
      const leftVertex = 150 - halfBase; // Left edge
      const rightVertex = 150 + halfBase; // Right edge
  
      let svg = `<polygon points="${150},${topVertex} ${leftVertex},${200} ${rightVertex},${200}" fill="${this.color}" />`;
  
      // Add text inside the triangle
      if (this.text) {
        const textX = 150; // Center text horizontally
        const textY = 100 + height / 2; // Center text vertically
        svg += `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
  
      return svg;
    }
  }
  