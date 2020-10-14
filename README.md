# Employee-App# ReadMe Generator


## Table of Contents
* [Description](#Description)
* [Technologies](#Technologies)
* [Features](#Features)
* [Author](#Author)
* [Credits](#Credits)
* [License](#License)

## Description 
Hi! Welcome to my Read me Generator. this app is run through node, and once you run the app through "node index.js" in the integrated terminal you will be prompted with questions about your project. You will then answer accordingly. Fair warning there will be questions about your github so be ready with that informaition. Once you have answered all of the questions the app will then generate a README.md file for you! Yay so much work already done for you. 


## Technologies
* [JavaScript](https://www.w3schools.com/js/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [FileSystem](https://nodejs.dev/learn/the-nodejs-fs-module)


## Features
![README-gif](./assets/README-generator.gif)

* So I used inquirer and set it equal to a object array. just to keep the code clean this is how I decided to do it.
```
 const questions = [{
        type: "input",
        name: "githubName",
        message: "What is your github user name"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "type a description of this project."
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What license would you like to use?"
    },
    {
        type: "input",
        name: "installation",
        message: "what command shouuld be run to install dependencies?"
    },
    {

        type: "input",
        name: "tests",
        message: "what command shouuld be run to tests?"

    },
    {
        type: "input",
        name: "usage",
        message: "what does the user need to know about using this repo?"
    },
    {
        type: "input",
        name: "contributer",
        message: "what does the user neet to know about contributing to the repo?"
    }
];
  ```


* Here is the function with all the meat in it. Here I made a function that writes to the read me by first passing the questions into the inquier. Then there is an if an else statement that genereates a badge depending on what the user chose for a licence. Last but not least the fs.writefile, writes to the file and the genereated README followed by a console.log letting you know that "it worked!"

```
function writeToFile() {
    inquirer.prompt(questions)
        .then(
            function(answers) {
                if (answers.license == "MIT") {
                    answers.license = "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"
                } else if (answers.license == "APACHE 2.0") {
                    answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                } else if (answers.license == "GPL 3.0") {
                    answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                } else if (answers.license == "BSD 3") {
                    answers.license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                } else {
                    answers.license = "None"
                }
                fs.writeFile("README.md", template(answers),
                    function(err, data) {
                        if (err) throw err;
                        console.log("it worked!")
                    })
            }
        )
}


writeToFile();
```


* Here is my template that I made for my read me. I used template literals to write to it. By the way I love template literals. genreating a great READ ME. I used a different js file to keep it clean. and used module.exports to require it on index.js.

```
function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Table of contents
* [Description](#Description)
* [Installation](#Installation)
* [Tests](#Tests)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [License](#License)

  ## Description 
  ${data.description}

  ## Installation
  To start you must install 

\`\`\`
  ${data.installation} 
\`\`\`


  ## Tests
  If you want to run tests you need to use 

  \`\`\`
  ${data.tests} 
\`\`\`


  #Usage
  ${data.usage} 
 

  ## Contributions
  ${data.contributer}

  ## License 
  ${data.license}

  ## Questions?
  Reach me at ${data.email}
  My Github picture
  
  ![picture](https://github.com/${data.githubName}.png?size=100)

`;
}

module.exports = generateMarkdown;
```
## Usage
[Usage-Video](https://drive.google.com/file/d/1HKjmV8m81vzhIJULUy3zQQgYiuAUOsfb/view)


## Installation
First thing you have to do is install node. Then you run npm init -y to create a package.json. Then yo install inquirer and run npm i. Once you are at that point you can now run index.js to begin creating your README.ms file. 
optional: you can install jest and run "npm run test" for testing.



## Author
Ivan Torres
* [GitHub-Repo](https://github.com/IvanTorresMia/READme-project-Ivan)
* [linkedIn](www.linkedin.com/in/ivan-torres-0828931b2)

## Credits
* Credits for this homework assignment go out to Jerome, Manuel, Kerwin, Roger, and all of my classmates who helped me in study sessions. As well as my tutor who helped me a ton with understanding this homework assignment. 
* [StackOverFlow](https://stackoverflow.com/)




## License]
[MIT](https://choosealicense.com/licenses/mit/#) license 