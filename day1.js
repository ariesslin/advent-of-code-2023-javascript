const fs = require("fs");

function calculateSum(lines) {
    let sum = 0;
    lines.forEach((line) => {
        const digits = line.match(/\d/g); // Extract all digits from the line
        if (digits && digits.length > 0) {
            const firstDigit = digits[0];
            const lastDigit = digits[digits.length - 1];
            sum += parseInt(firstDigit + lastDigit);
        }
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
    const filePath = "day1.txt";
    const result = processFile(filePath);
    console.log("Sum of calibration values:", result);
}

main();

module.exports = calculateSum;
