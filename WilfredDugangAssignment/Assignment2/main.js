const { argv } = require('yargs');
const FileWatcher = require('./fileWatcher');
const ShowNotifier = require('./notifier');


const {name, path} = argv;

const watchFile = new FileWatcher();

watchFile.checkFile(path,name);

const printToConsole = (fileName) =>{

    console.log(`Your name was mention on file  ${fileName}` );
};

const openToastNotification = (fileName) =>{

   const notification = new ShowNotifier(fileName);
   notification.showNotificationMessage();
};

watchFile.on('nameFoundOnFile', (file)=> {

    printToConsole(file);
    openToastNotification(file);

});

