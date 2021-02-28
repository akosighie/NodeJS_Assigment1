const notifier = require('node-notifier');

class ShowNotifier
{
    constructor (fileName)
    {
        this.fileName = fileName;        
    };

    showNotificationMessage = () => {
       notifier.notify({
        title: 'File Watcher',
        message: `Your name was mentioned on file:  ${this.fileName}`
       });
    };

};

module.exports = ShowNotifier;