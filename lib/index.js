#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clear_1 = __importDefault(require("clear"));
var chalk_1 = __importDefault(require("chalk"));
var figlet_1 = __importDefault(require("figlet"));
var inquirer_1 = __importDefault(require("inquirer"));
var day_one_1 = require("./day-one");
var day_two_1 = require("./day-two");
(0, clear_1.default)();
function showPrompt() {
    console.log(chalk_1.default.blue(figlet_1.default.textSync("Advent-2021", { horizontalLayout: "full" })));
    inquirer_1.default
        .prompt([
        {
            type: "list",
            name: "day",
            message: "Select a day",
            choices: ["Day One", "Day Two"],
        },
    ])
        .then(function (answers) {
        if (answers.day == "Day One") {
            console.log("Hurray!");
            (0, day_one_1.dayOne)();
            showPrompt();
        }
        else {
            console.log("Hurray!!");
            (0, day_two_1.dayTwo)();
            showPrompt();
        }
    });
}
showPrompt();
