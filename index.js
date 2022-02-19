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

  {
    type: "input",
    name: "installation",
    message: "Please describe how to install your project",
  },

  {
    type: "input",
    name: "usage",
    message: "Please describe how to use your project",
  },

  {
    type: "list",
    name: "license",
    message: "Chose the license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
    },

    {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
    },
    {
    type: "input",
    name: "tests",
    message: "Is there a test included with this project?"
   },
    {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
    },
    {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
    },
    {
    type: "input",
    name: "email",
    message: "Please enter your email: "
    }

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
