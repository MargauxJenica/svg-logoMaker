// shapes.js
// parent class of shapes passes the shape color and setColor method
class Shape {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}  

// child classes inherit the above
// render functions all have different outputs but same function
class Circle extends Shape {  // Corrected class name to `Shape`
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
  }
}

class Triangle extends Shape {  // Corrected class name to `Shape`
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="150, 30 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {  // Corrected class name to `Shape`
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
  }
}

module.exports = { Circle, Triangle, Square };
