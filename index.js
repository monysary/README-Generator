// Declare dependencies
const fs = require("fs");
const inquirer = require("inquirer");

// Terminal prompts for generating README.md
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the command for users to install dependencies?",
        name: "installation",
        default: "npm i inquirer@8.2.4"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "List your contributors and collaborators.",
        name: "credits"
    },
    {
        type: "list",
        message: "What is your project license?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "What is the command for users to test your project?",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// Function to write README file
const writeToFile = (fileName, data) => {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
