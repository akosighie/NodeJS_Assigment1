// consider: string.concat
// old way
// let testValue = "starcraft";
// const newValue = testValue.concat("legacy", "of", "the", "void");

// console.log(newValue);

// es6 way
// const values = ["legacy ", "of ","the ", "void"];
// const initValue = "starcraft ";
// const newValueES6 = initValue.concat(...values);
// console.log(newValueES6);

//copy an array
// old way
// const array = [1,2,3];
// const arrayCopy = array.slice();
// console.log(arrayCopy);

// es6 way
// const array = [1,2,3];
// const arrayCopy = [...array];
// console.log(arrayCopy);

//copying an object literal

const person = {
    name: 'jayson',
    job: 'developer',
    company : {
        name: 'Magenic'
    }
};

const personCopy = {
    ...person,
    job: 'quality engineer',
};

console.log(personCopy);