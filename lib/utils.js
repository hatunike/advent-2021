"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStar = exports.printDay = void 0;
var figlet_1 = __importDefault(require("figlet"));
var chalk_1 = __importDefault(require("chalk"));
function printDay(str) {
    console.log(chalk_1.default.red(figlet_1.default.textSync(str, { width: 120 })));
    console.log("--------------------------------------------------------");
    console.log(" ");
}
exports.printDay = printDay;
function showStar() {
}
exports.showStar = showStar;
