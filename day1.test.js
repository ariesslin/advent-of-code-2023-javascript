const calculateSum = require("./day1"); // Replace with the correct path to your calculateSum function

describe("day 1 part 1", () => {
    test('should return 12 for a single line "1ab9c2"', () => {
        expect(calculateSum(["1abc2"])).toBe(12);
    });

    test('should return 50 for multiple lines ["1abc2", "pqr3stu8vwx"]', () => {
        expect(calculateSum(["1abc2", "pqr3stu8vwx"])).toBe(50);
    });

    test('should return 77 for a line with only one digit "treb7uchet"', () => {
        expect(calculateSum(["treb7uchet"])).toBe(77);
    });

    test('should return 0 for a line with no digits "abcdef"', () => {
        expect(calculateSum(["abcdef"])).toBe(0);
    });

    test("should return 0 for an empty line", () => {
        expect(calculateSum([""])).toBe(0);
    });

    test("should return 0 for an empty array", () => {
        expect(calculateSum([])).toBe(0);
    });

    // Additional test case: Combination of various types of lines
    test("should correctly sum values for a mix of different lines", () => {
        const lines = [
            "1abc2",
            "pqr3stu8vwx",
            "treb7uchet",
            "abcdef",
            "",
            "a1b2c3d4e5f",
        ];
        expect(calculateSum(lines)).toBe(12 + 38 + 77 + 0 + 0 + 15);
    });
});

describe("day 1 part 2", () => {
    test('should return 29 for "two1nine"', () => {
        expect(calculateSum(["two1nine"])).toBe(29);
    });

    test('should return 83 for "eightwothree"', () => {
        expect(calculateSum(["eightwothree"])).toBe(83);
    });

    test('should return 13 for "abcone2threexyz"', () => {
        expect(calculateSum(["abcone2threexyz"])).toBe(13);
    });

    test('should return 24 for "xtwone3four"', () => {
        expect(calculateSum(["xtwone3four"])).toBe(24);
    });

    test('should return 42 for "4nineeightseven2"', () => {
        expect(calculateSum(["4nineeightseven2"])).toBe(42);
    });

    test('should return 14 for "zoneight234"', () => {
        expect(calculateSum(["zoneight234"])).toBe(14);
    });

    test('should return 76 for "7pqrstsixteen"', () => {
        expect(calculateSum(["7pqrstsixteen"])).toBe(76);
    });
});
