#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// const inquirer = require("inquirer"); commonjs
let calculator = await inquirer.prompt([
    {
        name: "Number1",
        message: "Enter first number",
        type: "number",


    }
    ,
    {
        name: "Number2",
        message: "Enter second number",
        type: "number",
    }
    ,
    {
        name: "operation",
        message: "What would you like to do with the numbers?",
        type: "list",
        choices: ["add", "subtract", "multiply", "divide"]
    }
]);
let result: number;
if (calculator.operation == "add") {
    result = calculator.Number1 + calculator.Number2;
    console.log(chalk.green.bold(result));
}

else if (calculator.operation == "subtract") {
    result = calculator.Number1 - calculator.Number2;
    console.log(chalk.red.bold(result));
}
else if (calculator.operation == "multiply") {
    result = calculator.Number1 * calculator.Number2;
    console.log(chalk.blue.bold(result));
}
else if (calculator.operation == "divide") {
    result = calculator.Number1 / calculator.Number2;
    console.log(chalk.black.bold(result));
}

// console.log(calculator) //ctrl + /