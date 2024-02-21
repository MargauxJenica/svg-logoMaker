// set the text and textColor
// get rendered shape and ShapeColor

class SVG {
    constructor(text, shape) {
        this.text = '';
        this.shape = '';
    }
    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    // takes rendered shape object and saves it to the svg constructor
    setShape(shape) {
        this.shape = shape.render();
    }
    // renders the svg with the input parameters
    render() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

// exports the SVG class for use in testing and generating the svg file in index.js
module.exports = SVG;