const EventEmitter = require('events');
const fs = require('fs');

class FileWatcher extends EventEmitter {

    checkFile = (pathFile, name) => {

      console.log(`Watching path ${pathFile}`);

      fs.watch(pathFile, {recursive:true}, (eventType, filename) => {

          fs.readFile(`${pathFile}\\${filename}`, 'utf8', (err, data) => {                   
            if(data.includes(name))
            {
                this.emit('nameFoundOnFile', filename);
            }
          });
      });

    };
};

module.exports = FileWatcher;



