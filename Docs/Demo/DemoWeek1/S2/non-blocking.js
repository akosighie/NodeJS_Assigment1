const fs = require('fs');

const readTextFile = filename => {
  console.log(`Reading file ${filename}...`);
  fs.readFile(filename, (err, data) => {
    console.log(`Reading finished...`);
    console.log(`Total characters found in file: ${data.length}`);
  });
};

const doStuff = todo => {
  console.log(`Doing stuff ${todo}...`);
};

readTextFile('file-short.txt');
readTextFile('file-short.txt');
readTextFile('file-short.txt');
readTextFile('file-short.txt');
readTextFile('file-short.txt');
readTextFile('file-short.txt');

doStuff('Read database');
doStuff('Save to database');
doStuff('Perform complex business rules');
doStuff('Read database');
doStuff('Save to database');
doStuff('Perform complex business rules');
doStuff('Read database');
doStuff('Save to database');
doStuff('Perform complex business rules');
doStuff('Read database');
doStuff('Save to database');
doStuff('Perform complex business rules');
