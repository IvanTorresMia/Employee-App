const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = [{
        type: "input",
        name: "managersName",
        message: "What is your managers name?"
    },
    {
        type: "input",
        name: "managersId",
        message: "What is your managers Id?"
    },
    {
        type: "input",
        name: "managersEmail",
        message: "What is your managers Email?"
    },
    {
        type: "input",
        name: "managersOfficeNumber",
        message: "What is your managers Office Number"
    }
];
const internQuestions = [{
        type: "input",
        name: "internsName",
        message: "What is your interns name?"
    },
    {
        type: "input",
        name: "internsId",
        message: "What is your interns Id?"
    },
    {
        type: "input",
        name: "internsEmail",
        message: "What is your interns Email?"
    },
    {
        type: "input",
        name: "internsSchool",
        message: "What is your interns Office Number"
    }
]
const engineersQuestions = [{
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's Id?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your  Email?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineers Github?"
    }
]
const newEmployee = [{
    type: "list",
    name: "kindofTeamMember",
    message: "Which type of team member would you like to add?",
    choices: ["Intern", "Engineer", "none"]
}];

const employees = [];

function kindOfEmployee() {
    inquirer.prompt(newEmployee)
        .then(function(newEmployeeAnswer) {
            if (newEmployeeAnswer.kindofTeamMember === "Engineer") {
                inquirer.prompt(engineersQuestions)
                    .then(function(engineerAnswers) {
                        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
                        employees.push(engineer)
                        kindOfEmployee()
                    })
            } else if (newEmployeeAnswer.kindofTeamMember === "Intern") {
                inquirer.prompt(internQuestions)
                    .then(function(internAnswers) {
                        const intern = new Intern(internAnswers.internsName, internAnswers.internsId, internAnswers.internsEmail, internAnswers.internsSchool);
                        employees.push(intern);
                        kindOfEmployee()
                    })
            } else if (newEmployeeAnswer.kindofTeamMember === "none") {
                const results = render(employees);
                fs.writeFile("./Develope/rendered.html", results,
                    function(err) {
                        if (err) throw err;
                        console.log("it worked!")

                    })
            }
        })
}

inquirer.prompt(managerQuestions)
    .then(function(managerAnswers) {
        const manager = new Manager(managerAnswers.managersName, managerAnswers.managersId, managerAnswers.managersEmail, managerAnswers.managersOfficeNumber)
        employees.push(manager)
        kindOfEmployee();
    })