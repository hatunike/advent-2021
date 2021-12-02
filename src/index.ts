#!/usr/bin/env node

import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import path from 'path'
import {program} from 'commander'
import inquirer from 'inquirer'
import {dayOne} from './day-one'

clear()

function showPrompt() {
console.log(chalk.blue(figlet.textSync('Advent-2021', { horizontalLayout: 'full' })))
  inquirer.prompt([
    {
      type: 'list',
      name: 'day',
      message: 'Select a day',
      choices: [
        'Day One',
        'Day Two',
      ]
    }
  ]).then((answers) => {
    if ( answers.day == 'Day One' ) {
      console.log("Hurray!")
      dayOne()
      showPrompt()
    } else {
      console.log("Boo!")
      showPrompt()
    }
  })
}

showPrompt()
