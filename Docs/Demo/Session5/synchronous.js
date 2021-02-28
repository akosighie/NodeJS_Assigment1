const EventEmitter = require('events');
const greetUser = new EventEmitter();

const greetEnglish = (name) => {
    console.log(`Hello ${name}`);
};

const greetJapanese = (name) => {
    console.log(`Konnichiwa ${name}`);
};

const greetSpanish = (name) => {
    console.log(`Hola ${name}`);
};

greetUser.on('login', greetEnglish);
greetUser.on('login', greetJapanese);
greetUser.once('login', greetSpanish);

greetUser.emit('login', 'John');
greetUser.emit('login', 'James');
greetUser.emit('login', 'Peter');

console.log(`Max listners: ${greetUser.getMaxListeners()}`);

console.log('Welcome to the application.');
