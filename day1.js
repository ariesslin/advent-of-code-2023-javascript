const fs = require("fs");

function calculateSum(lines) {
    const digitPattern = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
        zero: "0",
    };

    let sum = 0;
    lines.forEach((line) => {
        // Replace spelled-out numbers with digits
        for (const [key, value] of Object.entries(digitPattern)) {
            line = line.replace(new RegExp(key, "g"), value);
        }

        // Extract all digits from the line
        const digits = line.match(/\d/g);
        if (digits && digits.length > 0) {
            // Combine first and last digit and convert to number
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
