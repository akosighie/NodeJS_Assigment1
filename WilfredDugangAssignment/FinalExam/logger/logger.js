const fs = require('fs');
const os = require("os");

class ServiceLogger {

    constructor() {

    }

    saveLog  = function(data) {
      
        const nameOfFile = "AttendanceMonitoringLogs-";
        const dateToday = new Date();
        const day = dateToday.getDate().toString();
        const month = dateToday.getMonth().toString();
        const year = dateToday.getFullYear().toString();

        const filename = nameOfFile + year + "-"+ month + "-" + day + ".txt";
        const filepath = __dirname + "\\" + filename;


        const logger = fs.createWriteStream(filepath, {
            flags: 'a' // 'a' means appending (old data will be preserved)
          });

          logger.write( "URL: " + data.url.toString() + os.EOL 
          + "Params: " + JSON.stringify(data.params) + os.EOL
          + "Body: " + JSON.stringify(data.body) + os.EOL
          + "End of line --------------------" + os.EOL
          );
        //   logger.write(data.params.toString()+ os.EOL);
        //   logger.write(data.body.toString()+ os.EOL);
        //   logger.write("End of line --------------------"+ os.EOL) ;

          logger.close();



        // if (fs.existsSync(filepath)) {
        //     fs.writeFileSync(filepath, data.url.toString());
        //     fs.writeFileSync(filepath, data.params.toString());
        //     fs.writeFileSync(filepath, data.body.toString());
        //     fs.writeFileSync(filepath, "End of line --------------------");
        //   } else {
        //     fs.writeFileSync(filepath, "");
        //   }
     }
}

module.exports = new ServiceLogger();