"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayTwo = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("./utils");
function dayTwo() {
    (0, utils_1.printDay)("Day 2 - Part 1");
    partOne();
    (0, utils_1.printDay)("Day 2 - Part 2");
    partTwo();
}
exports.dayTwo = dayTwo;
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Forward"] = "forward";
})(Direction || (Direction = {}));
function partOne() {
    console.log(sampleDataSet().map(function (x) { return stringsToCommands(x); }));
    var sampleCommands = sampleDataSet().map(function (x) { return stringsToCommands(x); });
    var forwards = sampleCommands.filter(function (x) { return x.direction === Direction.Forward; });
    var totsForward = forwards.reduce(function (x, y) { return x + y.distance; }, 0);
    console.log(forwards);
    console.log(totsForward);
}
function isSecondHigher(x, y, index, arr) {
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
function stringsToCommands(rawString) {
    return {
        direction: rawString.split(" ")[0],
        distance: Number(rawString.split(" ")[1]),
    };
}
function numbersFromFile() {
    var file = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "day-two.txt"), "utf8");
    return file.split("\n").map(function (x) { return Number(x); });
}
function partTwo() {
    console.log("Part Two");
}
function isSecondThreeHigher(x, y, index, arr) {
    if (index > 0 && index < arr.length - 2) {
        var current = y + arr[index + 1] + arr[index + 2];
        var prior = arr[index - 1] + y + arr[index + 1];
        return current > prior ? x + 1 : x;
    }
    return x;
}
