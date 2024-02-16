// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes.js"); //
const svgGenerator = require("./lib/svg.js"); // requires the svgGenerator class with methods (setText, setColor, setShape)

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters: ',
            validate: function (input) {  // validate input length is between 1 and 3 characters

              const isValid = input.length >= 1 && input.length <= 3;
              return isValid ? true : 'Invalid! Please enter between 1-3 characters.';
          }, 
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color (keyword or hex): ',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape for your logo: ',
            choices: ['Circle', 'Triangle', 'Square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for your shape (keyword or hex): ',
          },
    ])
    .then((response) => {

      let userShape = response.shape;

      // setting the shape
          switch (userShape) {
              case 'Circle':
                  userShape = new Circle();
                  break;
              case 'Triangle':
                  userShape = new Triangle();
                  break;
              case 'Square':
                  userShape = new Square();
                  break;
          }
      
      // create a new instance of svgGenerator
      const SVG = new svgGenerator();

      // set text and text color for the SVG
      SVG.setText(response.text, response.textColor);
      
      // set shape color and assign the shape to the SVG
      userShape.setColor(response.shapeColor);
      SVG.setShape(userShape);
      
      // write to the logo.svg file in the examples folder
      fs.writeFile('./examples/logo.svg', SVG.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
      );
    });