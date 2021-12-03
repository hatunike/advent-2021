import fs from "fs";
import path from "path";
import { printDay } from "./utils";

export function dayTwo() {
  printDay("Day 2 - Part 1");
  partOne();
  printDay("Day 2 - Part 2");
  partTwo();
}

enum Direction {
  Up = "up",
  Down = "down",
  Forward = "forward",
}

interface SubCommand1 {
  direction: Direction;
  distance: number;
}

function partOne() {
  console.log(sampleDataSet().map((x) => stringsToCommands(x)));
  // const cmds = sampleDataSet().map((x) => stringsToCommands(x));
  const cmds = numbersFromFile().map((x) => stringsToCommands(x));
  const forward = totalDirection(cmds, Direction.Forward);
  const down = totalDirection(cmds, Direction.Down);
  const up = totalDirection(cmds, Direction.Up);
  console.log({
    horizontal: forward,
    vertical: down - up,
    combo: forward * (down - up),
  });
}

function totalDirection(cmds: SubCommand1[], direction: Direction) {
  return cmds
    .filter((x) => x.direction === direction)
    .reduce((x, y) => x + y.distance, 0);
}

function isSecondHigher(x: number, y: number, index: number, arr: number[]) {
  if (index > 0) {
    return y > arr[index - 1] ? x + 1 : x;
  }
  return 0;
}

// Is self higher than previous?

function sampleDataSet() {
  console.log("Sample Dataset");
  return ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];
}

function stringsToCommands(rawString: string): SubCommand1 {
  return {
    direction: rawString.split(" ")[0] as Direction,
    distance: Number(rawString.split(" ")[1]),
  };
}

function numbersFromFile() {
  const file = fs.readFileSync(path.resolve(__dirname, "day-two.txt"), "utf8");
  return file.split("\n").map((x) => x);
}

function partTwo() {
  console.log("Part Two");
  // const cmds = sampleDataSet().map((x) => stringsToCommands(x));
  const cmds = numbersFromFile().map((x) => stringsToCommands(x));
  let aim = 0;
  let depth = 0;
  let forward = 0;
  for (var index in cmds) {
    const cmd = cmds[index];
    switch (cmd.direction) {
      case Direction.Up: {
        aim = aim - cmd.distance;
        break;
      }
      case Direction.Down: {
        aim = aim + cmd.distance;
        break;
      }
      case Direction.Forward: {
        forward = forward + cmd.distance;
        depth = depth + cmd.distance * aim;
        break;
      }
    }
  }

  console.log({
    horizontal: forward,
    vertical: depth,
    combo: forward * depth,
  });
}

function isSecondThreeHigher(
  x: number,
  y: number,
  index: number,
  arr: number[]
) {
  if (index > 0 && index < arr.length - 2) {
    const current = y + arr[index + 1] + arr[index + 2];
    const prior = arr[index - 1] + y + arr[index + 1];
    return current > prior ? x + 1 : x;
  }
  return x;
}
