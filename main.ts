#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


do{
const { userInput } = await inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "\n--> Enter the sentence: ",
        prefix: ""
    }
])

if (userInput === ""){
    console.log(chalk.rgb(255, 0, 0)("\n==================================================================\n"));
    console.log(chalk.rgb(255, 0, 0)("Please enter some words!"));
    console.log(chalk.rgb(255, 0, 0)("\n==================================================================\n"));

}else{
let sentenceWords = userInput.trim().split(" ").length;
let sentenceLetters = userInput.split(" ").join("").length;

console.log(chalk.rgb(255, 255, 0)("\n==================================================================\n"));
console.log(chalk.rgb(0, 255, 0)(`\t=====>>> \t${userInput.trim()}\t   <<<=====`));
console.log(chalk.rgb(0, 255, 0)(`\n\t==>  There are ${chalk.rgb(255, 255, 0)(`'${sentenceWords}'`)} words in your sentence.`));

/*converting user given string sentence to array like userInput.split(" ")--> ["how", "are", "you"]
and then again converting array to string like --> userInput.join("") "howareyou" */
console.log(chalk.rgb(0, 255, 0)(`\n\t==>  And there are ${chalk.rgb(255, 255, 0)(`'${sentenceLetters}'`)} letters in your sentence.`));



console.log(chalk.rgb(255, 255, 0)("\n==================================================================\n"));
}
var { runAgain } = await inquirer.prompt([
    {
        type: "confirm",
        name: "runAgain",
        message: "Do you want to run program again? ",
        prefix: ""        
    }
])


}while(runAgain);
console.log(chalk.rgb(0, 255, 0)("\n\t|  Thank You  for visit  |"));






