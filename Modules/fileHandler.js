const fs = require('fs').promises;

class FileHandler {
    async readJsonFile(filename) {
        try {
            const data = await fs.readFile(filename, 'utf8');
            return data
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log(`File ${filename} not found. Creating a new one.`);
                return null;
            }
            throw error;
        }
    }

    async writeJsonFile(filename, data) {
        try {
            await fs.writeFile(filename, JSON.stringify(data, null, 2));
            console.log(`Data successfully written to ${filename}`);
        } catch (error) {
            console.error(`Error writing to file: ${error}`);
            throw error;
        }
    }
}

module.exports = FileHandler;