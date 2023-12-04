const { calculatePartNumbersSum } = require("./day3");

describe("calculatePartNumbersSum", () => {
    it("calculates the sum of part numbers in a small engine schematic", () => {
        const schematic = [
            "467..114..",
            "...*......",
            "..35..633.",
            "......#...",
            "617*......",
            ".....+.58.",
            "..592.....",
            "......755.",
            "...$.*....",
            ".664.598..",
        ];
        expect(calculatePartNumbersSum(schematic)).toEqual(4361);
    });

    it("returns zero for an empty schematic", () => {
        expect(calculatePartNumbersSum([])).toEqual(0);
    });

    it("ignores numbers not adjacent to a symbol", () => {
        const schematic = [
            "123......",
            ".........",
            ".........",
            "..+......",
            "456......",
        ];
        expect(calculatePartNumbersSum(schematic)).toEqual(456);
    });

    it("handles a single line schematic", () => {
        const schematic = ["12*34.56"];
        expect(calculatePartNumbersSum(schematic)).toEqual(46);
    });
});
