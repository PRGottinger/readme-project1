// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please provide a project title",
  },

  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userInput) => {
    const output = generateMarkdown(userInput);
    console.log(output);
    fs.writeFile("./README.md", output, () => {
      console.log("readme file successfully generated");
    });
  });
}

// Function call to initialize app
init();
