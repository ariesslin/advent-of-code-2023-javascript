const { parseGameString, calculatePossibleGamesSum } = require("./day2");

describe("day 2 part 1 - helper - parseGameString", () => {
    it("correctly parses a game string with multiple colors and sets", () => {
        const input = "Game 1: 3 green, 4 red; 1 red, 2 green, 6 blue; 2 green";
        const expectedOutput = {
            id: 1,
            sets: [
                { green: 3, red: 4 },
                { red: 1, green: 2, blue: 6 },
                { green: 2 },
            ],
        };
        expect(parseGameString(input)).toEqual(expectedOutput);
    });

    it("correctly handles a game string with only one set of colors", () => {
        const input = "Game 2: 2 blue, 1 red";
        const expectedOutput = {
            id: 2,
            sets: [{ blue: 2, red: 1 }],
        };
        expect(parseGameString(input)).toEqual(expectedOutput);
    });

    it("returns an empty object for an invalid input string", () => {
        const input = "Invalid string";
        const expectedOutput = { id: null, sets: [] };
        expect(parseGameString(input)).toEqual(expectedOutput);
    });

    it("handles a game string with no color counts", () => {
        const input = "Game 3: ";
        const expectedOutput = { id: null, sets: [] };
        expect(parseGameString(input)).toEqual(expectedOutput);
    });
});

describe("day 2 part 1 - calculatePossibleGamesSum", () => {
    it("should return the sum of game IDs where all subsets are possible", () => {
        const games = [
            "Game 1: 3 green, 4 red; 1 red, 2 green, 6 blue; 2 green",
            "Game 2: 1 blue, 2 green; 3 green, 4 red, 1 blue; 1 green, 1 blue",
        ];
        expect(calculatePossibleGamesSum(games)).toBe(3); // IDs 1 and 2 are possible
    });

    it("should return zero for games with impossible subsets", () => {
        const games = [
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        ];
        expect(calculatePossibleGamesSum(games)).toBe(0); // Game 3 is impossible
    });

    it("should return zero for an empty list of games", () => {
        expect(calculatePossibleGamesSum([])).toBe(0);
    });

    it("should correctly calculate the sum for a mixed list of possible and impossible games", () => {
        const games = [
            "Game 1: 3 green, 4 red; 1 red, 2 green, 6 blue; 2 green",
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
            "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
        ];
        expect(calculatePossibleGamesSum(games)).toBe(6); // Only games 1 and 5 are possible
    });
});
