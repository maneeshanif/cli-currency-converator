#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright.bold.bgWhiteBright('\t\t\t\t\t\t Currency Converter'));
console.log(chalk.greenBright('\nDeveloped By:'));
console.log(chalk.blueBright.underline("\tAnees Hanif"));
console.log("\n");
const currency = {
    USD: 1,
    EUR: 301,
    GBP: 351,
    INR: 3.33,
    PKR: 277
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.redBright.bold.italic("\t\t\tEnter from Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: chalk.blueBright.bold.italic("\t\t\tEnter to Currency "),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: chalk.cyanBright.underline("Enter your amount"),
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellowBright.bold `\tThe converted amount  is = ${convertedAmount}`);
