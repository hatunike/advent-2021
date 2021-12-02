import figlet from 'figlet'
import chalk from 'chalk'

export function printDay(str: string) {
  console.log(chalk.red(figlet.textSync(str, { width: 120 })))
  console.log("--------------------------------------------------------")
  console.log(" ")
}

export function showStar() {
}
