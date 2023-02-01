#! /usr/bin/env node
import inquirer from "inquirer";
async function StartFunc() {
    const ComputerNumber = Math.floor(Math.random() * 10);
    const PlayerNumber = await inquirer.prompt([
        {
            type: 'number',
            name: 'userGuess',
            message: "Enter Any Number from 1 to 10: "
        }
    ]);
    const { userGuess } = PlayerNumber;
    console.log("Your Guess: ", userGuess, "\nComputer's Guess: ", ComputerNumber);
    if (userGuess === ComputerNumber) {
        console.log("Congratulations!! You have correctly guessed it. \nYou Won ^_^ ");
    }
    else {
        console.log("Ooopss!!!! Better luck next time!");
    }
}
async function StarAgain() {
    do {
        await StartFunc();
        var again = await inquirer
            .prompt({
            type: "input",
            name: 'restart',
            message: "Do you want to continue ? press Y or N"
        });
    } while (again.restart === "Y" || again.restart === "y" || again.restart === "YES" || again.restart === "yes");
}
StarAgain();
