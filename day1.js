const fs = require("fs");

function replaceSpelledNumbers(line) {
    const digitPattern = {
        zero: "z0o",
        one: "o1e",
        two: "t2o",
        three: "t3e",
        four: "f4r",
        five: "f5e",
        six: "s6x",
        seven: "s7n",
        eight: "e8t",
        nine: "n9e",
    };

    Object.entries(digitPattern).forEach(([word, replacement]) => {
        line = line.replace(new RegExp(word, "g"), replacement);
    });

    return line;
}

function getNumberFromFirstAndLastDigit(line) {
    const modifiedLine = replaceSpelledNumbers(line);
    const digits = modifiedLine.match(/\d/g);
    if (digits && digits.length > 0) {
        const firstDigit = digits[0];
        const lastDigit = digits[digits.length - 1];
        return parseInt(firstDigit + lastDigit);
    }

    return 0;
}

function calculateSum(lines) {
    let sum = 0;
    lines.forEach((line) => {
        const number = getNumberFromFirstAndLastDigit(line);
        sum += number;
    });
    return sum;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf8");

        const lines = content.split("\n");

        return calculateSum(lines);
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}

function main() {
    const filePath = "day1_part2.txt";
    const result = processFile(filePath);
    console.log("Sum of calibration values:", result);
}

main();

module.exports = calculateSum;
