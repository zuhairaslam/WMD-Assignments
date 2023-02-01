#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTittle = chalkanimation.rainbow('Lets start Zuhair calculator !'); // start
    await sleep();
    rainbowTittle.stop();
    console.log(` 
     _____________________
    |  _________________  |
    | | MAC          0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
`);
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operator you want to perform ? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your first number!"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your Second number!"
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        // console.log(answers);
        if (answers.operator == "Addition") {
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "Subtraction") {
            console.log(chalk.grey(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "Multiplication") {
            console.log(chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "Division") {
            console.log(chalk.red(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
        else if (answers.operator == "Power") {
            console.log(chalk.bgCyan(`${answers.num1} ^ ${answers.num2} = ${Math.pow(answers.num1, answers.num2)}`));
        }
    });
}
;
// askQuestion();
async function StartAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue? press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
StartAgain();
