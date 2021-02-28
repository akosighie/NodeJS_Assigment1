const FileCreator = require('./TextFileCreator');
const fs = require('fs/promises');

const backupFileHandler = async ({ filename, contents }) => {
    await fs.writeFile(`${filename}.bak`, contents);
    console.log(`Backup file created for ${filename}.txt`);
};

const addTimeStampHandler = async (data) => {
    const currentDateTime = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;

    await fs.appendFile(`${data.filename}.txt`, `\n\n${currentDateTime}`);
    console.log('Timestamp added.');
};

const fileCreator = new FileCreator();

fileCreator.on('fileCreated', backupFileHandler);
fileCreator.on('fileCreated', addTimeStampHandler);

fileCreator.createFile();
