const processFile = require("./processFile");

const bag = { red: 12, green: 13, blue: 14 };

function parseGameString(gameString) {
    const gameRegex = /Game (\d+): (.+)/;
    const setRegex = /(\d+) (\w+)/g;

    const gameMatch = gameRegex.exec(gameString);

    // Return an object with an empty sets array if no match is found
    if (!gameMatch) return { id: null, sets: [] };

    const id = parseInt(gameMatch[1]);
    const setsString = gameMatch[2];
    const sets = [];

    setsString.split(";").forEach((setString) => {
        const set = {};
        let match;
        while ((match = setRegex.exec(setString.trim())) !== null) {
            const color = match[2];
            const count = parseInt(match[1]);
            set[color] = count;
        }
        if (Object.keys(set).length > 0) {
            sets.push(set);
        }
    });

    return { id, sets };
}

function calculatePossibleGamesSum(gameStrings) {
    const games = gameStrings.map(parseGameString);

    return games
        .filter((game) => game.sets.every(verifySet))
        .reduce((sum, game) => sum + game.id, 0);
}

function verifySet(set) {
    for (const color in set) {
        if (bag[color] < set[color]) {
            return false;
        }
    }
    return true;
}

function main() {
    const filePath = "day2_input.txt";
    const lines = processFile(filePath);

    const result = calculatePossibleGamesSum(lines);
    console.log("Sum of possible games:", result);
}

main();

module.exports = { parseGameString, calculatePossibleGamesSum };
