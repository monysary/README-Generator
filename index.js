// Declare dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: "dependency",
        default: "npm i"
    },
    {
        type: "input",
        message: "What is your project's website url (if any)?",
        name: "url"
    },
    {
        type: "input",
        message: "What is the command for users to test your project?",
        name: "test",
        default: "npm test"
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
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }
];

// Function to write README file
// const writeToFile = (fileName, data) => {
//     fs.writeFile
// }

// Function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            fs.writeFile("README.md", generateMarkdown(response), (error) => 
                error ? console.log(error) : console.log("README file created!")
            )
        })
}

// Function call to initialize app
init();
