const fs = require("fs");

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf8");
        const lines = content.split("\n");

        return lines;
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}

module.exports = processFile;
