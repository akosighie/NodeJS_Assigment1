const EventEmitter = require('events');
const readline = require('readline');
const fs = require('fs/promises');

class TextFileCreator extends EventEmitter {
    createFile = () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(`Enter file name: `, (filename) => {
            rl.question(`Enter contents: `, (contents) => {
                this.saveFile(filename, contents);
                rl.close();
            });
        });
    };

    saveFile = async (filename, contents) => {
        await fs.writeFile(`${filename}.txt`, contents);

        console.log(
            `Successfully saved file ${filename} containing ${contents}`
        );

        this.emit('fileCreated', {
            filename,
            contents,
        });
    };
}

module.exports = TextFileCreator;
