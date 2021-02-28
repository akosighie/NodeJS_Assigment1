const fs = require('fs/promises');

const uncaughtExceptionHandler = async (err, origin) => {
    const message = `Caught exception: ${err}\n`;
    await fs.appendFile('crash.log', message);
    console.log(message);
};

process.on('uncaughtException', uncaughtExceptionHandler);

nonExistingFunction();
