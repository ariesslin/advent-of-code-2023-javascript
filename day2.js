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

function verifySet(set) {
    for (const color in set) {
        if (bag[color] < set[color]) {
            return false;
        }
    }
    return true;
}

function calculatePossibleGamesSum(gameStrings) {
    const games = gameStrings.map(parseGameString);

    return games
        .filter((game) => game.sets.every(verifySet))
        .reduce((sum, game) => sum + game.id, 0);
}

function calculateMinCubesForGame(game) {
    const minCubes = { red: 0, green: 0, blue: 0 };

    game.sets.forEach((set) => {
        for (const color in set) {
            if (set[color] > minCubes[color]) {
                minCubes[color] = set[color];
            }
        }
    });

    return minCubes;
}

function calculatePowerOfSet(minCubes) {
    return Object.values(minCubes).reduce(
        (product, count) => product * count,
        1
    );
}

function calculateMinimumCubesPowerSum(gameStrings) {
    const games = gameStrings.map(parseGameString);

    return games.reduce((totalSum, game) => {
        if (game.id === null) return totalSum;
        const minCubes = calculateMinCubesForGame(game);
        const power = calculatePowerOfSet(minCubes);
        return totalSum + power;
    }, 0);
}

function main() {
    const filePath = "day2_input.txt";
    const lines = processFile(filePath);

    const result = calculateMinimumCubesPowerSum(lines);
    console.log("Sum of possible games:", result);
}

main();

module.exports = {
    parseGameString,
    calculatePossibleGamesSum,
    calculateMinimumCubesPowerSum,
};
