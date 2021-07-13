// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    name:"github",
    message:"Github Username?"
},
{
    type:"input",
    name:"email",
    message:"Email Address?"
},
{
    type:"input",
    name:"title",
    message:"Project Name?"
},
{
    type:"input",
    name:"description",
    message:"Provide short description of project:"
},
{
    type:"List",
    name:"License",
    message:"What kind of project license do you have",
    choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
},
{
    type:"input",
    name:"installation",
    message:"What command should be use to run dependencies",
    default: "npm i"
},
{
    type:"input",
    name:"test",
    message:"What command should be use to run test",
    default: "npm test"
},
{
    type:"input",
    name:"usage",
    message:"What does the user need to know about the repo?",
},
{
    type:"input",
    name:"contributing",
    message:"Contributions to the repo:",
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {
        console.log("Generating ReadMe...");
        writeToFile("ReadMe.md", generateMarkdown({...inquirerResponse}));
    })
}

// Function call to initialize app
init();
