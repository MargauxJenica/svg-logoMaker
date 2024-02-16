// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes.js");

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters: ',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color: ',
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
            message: 'Enter a color for your shape: ',
          },
    ])
    .then((response) => {
        
        // const placeHolder = place-Holder(response);

    // write to the logo.svg file in the examples folder
// fs.writeFile('./examples/logo.svg', placeHolder, (err) => {
      // console.log('Respones: ', responses);
      // err ? console.log (err) : console.log('Success, your logo has been rendered!')
// })
    });