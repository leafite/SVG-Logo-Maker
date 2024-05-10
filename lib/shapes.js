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