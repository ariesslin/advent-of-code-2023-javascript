const processFile = require("./processFile");

function isDigit(character) {
    return !isNaN(character) && character !== ".";
}

function readNumber(schematic, x, y) {
    let number = "";
    while (x < schematic[0].length && isDigit(schematic[y][x])) {
        number += schematic[y][x];
        x++;
    }
    return number;
}

function isAdjacentToSymbol(schematic, x, y, length) {
    // Check all cells covered by the number and their adjacent cells
    for (let i = 0; i < length; i++) {
        if (checkAdjacentCells(schematic, x + i, y)) {
            return true;
        }
    }
    return false;
}

function checkAdjacentCells(schematic, x, y) {
    // Directions to check adjacent cells: N, NE, E, SE, S, SW, W, NW
    const directions = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
    ];

    for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
            nx >= 0 &&
            nx < schematic[0].length &&
            ny >= 0 &&
            ny < schematic.length
        ) {
            const adjacentCell = schematic[ny][nx];
            if (adjacentCell !== "." && isNaN(adjacentCell)) {
                return true;
            }
        }
    }

    return false;
}

function calculatePartNumbersSum(schematic) {
    let sum = 0;
    const height = schematic.length;
    const width = schematic[0] ? schematic[0].length : 0;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (
                isDigit(schematic[y][x]) &&
                (x === 0 || !isDigit(schematic[y][x - 1]))
            ) {
                const number = readNumber(schematic, x, y);
                if (isAdjacentToSymbol(schematic, x, y, number.length)) {
                    sum += parseInt(number);
                }
            }
        }
    }

    return sum;
}

function main() {
    const filePath = "day3_input.txt";
    const lines = processFile(filePath);

    const result = calculatePartNumbersSum(lines);
    console.log("Sum of part numbers:", result);
}

main();

module.exports = { calculatePartNumbersSum };
