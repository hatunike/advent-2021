"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOne = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("./utils");
function dayOne() {
    (0, utils_1.printDay)("Day 1 - Part 1");
    partOne();
    (0, utils_1.printDay)("Day 1 - Part 2");
    partTwo();
}
exports.dayOne = dayOne;
function partOne() {
    console.log("SampleSet ", sampleDataSet().reduce(isSecondHigher, 0), "numbers that are higher than the previous rows");
    var numbers = numbersFromFile();
    console.log(numbers);
    var reducer = numbers.reduce(isSecondHigher, 0);
    console.log("There are ", reducer, "numbers that are higher than the previous rows");
}
function isSecondHigher(x, y, index, arr) {
    if (index > 0) {
        return y > arr[index - 1] ? x + 1 : x;
    }
    return 0;
}
// Is self higher than previous?
function sampleDataSet() {
    return [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
}
function numbersFromFile() {
    var file = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "day-one.txt"), "utf8");
    return file.split("\n").map(function (x) { return Number(x); });
}
function partTwo() {
    var numbers = numbersFromFile();
    console.log(numbers);
    var reducer = numbers.reduce(isSecondThreeHigher, 0);
    console.log("Part Two", reducer);
}
function isSecondThreeHigher(x, y, index, arr) {
    if (index > 0 && index < arr.length - 2) {
        var current = y + arr[index + 1] + arr[index + 2];
        var prior = arr[index - 1] + y + arr[index + 1];
        return current > prior ? x + 1 : x;
    }
    return x;
}
