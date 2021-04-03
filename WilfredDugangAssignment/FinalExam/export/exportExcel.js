const fs = require('fs');

class ExcelExport {

    constructor(filename, data) {

        this.filename = filename;
        this.data = data

    }

    exportDataToExcel  = () => {

        console.log(this.filename); 
        console.log(this.data); 

        //const writeStream = fs.createWriteStream(`${filename}.xls`);

        // var header="Member Name"+"\t"+" Time-In"+"\t"+"Time-Out"+"\n";


        // var row1 = "0"+"\t"+" 21"+"\t"+"Rob"+"\n";
        // var row2 = "1"+"\t"+" 22"+"\t"+"bob"+"\n";

        // writeStream.write(header);
        // writeStream.write(row1);
        // writeStream.write(row2);

        // writeStream.close();

    };
}

module.exports = ExcelExport;