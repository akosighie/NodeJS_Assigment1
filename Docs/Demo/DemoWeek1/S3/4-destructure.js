// Array destructuring
// old way
// const test = ["jayson", "opena"];

// const name = test[0];
// const lastname = test[1];

// the es6 way
const test = ["jayson", "opena"];

const [name, lastname, middlename] = test;

// console.log(name);
// console.log(lastname);


//object destructuring

const obj = {
    firstName: 'Jayson',
    lastName: 'Opena',
    age: 29,
    getFullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    },
    info: {
        company: 'Magenic Manila',
        newCompany: 'Cognizant'
    }
}

// old way
// obj.firstName;
// obj.getFullName();

// es6 way

const { lastName, firstName, age, getFullName, info: { company, newCompany } } = obj;
// console.log(age);
//console.log(lastName);
// console.log(newCompany);

// console.log(firstName);
console.log(obj)

//getFullName() will return 'undefined undefined' because 'this' will point to the global object. Be careful with 'this'!
//use obj.getFullName to have a reference to 'this'
console.log(getFullName()); 
