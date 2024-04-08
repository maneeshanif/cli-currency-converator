import inquirer from "inquirer";
import chalk from "chalk";
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
        message: chalk.red.bgGreenBright("\t\t\tEnter from Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: chalk.greenBright("Enter your amount"),
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
