import fs from 'fs'
import path from 'path'
import {printDay} from './utils'

export function dayOne() {
  printDay("Day 1 - Part 1")
  partOne()
  printDay("Day 1 - Part 2")
  partTwo()
}

function partOne() {

  console.log("SampleSet ", sampleDataSet().reduce(isSecondHigher, 0), "numbers that are higher than the previous rows");
  const numbers = numbersFromFile()
  console.log(numbers)
  const reducer = numbers.reduce(isSecondHigher, 0)
  console.log("There are ", reducer, "numbers that are higher than the previous rows");
}

function isSecondHigher(x:number, y:number, index:number, arr:number[]) {
  if (index > 0) {
    return y > arr[index-1] ? x + 1 : x
  }
  return 0
}

// Is self higher than previous?

function sampleDataSet() {
  return [ 199,200,208,210,200,207,240,269,260,263];
}

function numbersFromFile () {
  const file = fs.readFileSync(path.resolve(__dirname, 'day-one.txt'), 'utf8')
  return file.split('\n').map(x => Number(x))
}

function partTwo() {
  const numbers = numbersFromFile()
  console.log(numbers)
  const reducer = numbers.reduce(isSecondThreeHigher, 0);
  console.log("Part Two", reducer);
}

function isSecondThreeHigher(x:number, y:number, index:number, arr:number[]) {
  if (index > 0 && index < arr.length - 2) {
    const current = y + arr[index+1] + arr[index+2]
    const prior = arr[index-1] + y + arr[index+1]
    return current > prior ? x + 1 : x
  }
  return x
}

