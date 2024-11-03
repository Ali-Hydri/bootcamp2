const readline = require('readline');

class UserInput {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    askQuestion(question) {
        return new Promise(resolve => this.rl.question(question, resolve));
    }

    async getUserPreferences() {
        const genre = await this.askQuestion("Enter your preferred genre: ");
        const minRating = await this.askQuestion("Enter the minimum rating (0-10): ");
        const startYear = await this.askQuestion("Enter the start of release year range: ");
        const endYear = await this.askQuestion("Enter the end of release year range: ");
        
        return {
            genre: genre.trim(),
            minRating: parseFloat(minRating),
            yearRange: { start: parseInt(startYear), end: parseInt(endYear) }
        };
    }

    close() {
        this.rl.close();
    }
}

module.exports = UserInput;