// Function constructor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const test = new Person('Jayson', 29);
// console.log(test);

//  Class Function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk = function () { //function expression
        console.log(`Hi my name is ${this.name}`);
    }

    tellAge() { //function declaration
        console.log(`Hi I am ${this.age} years old.`);
    }
}

const person = new Person('Jayson', 29);
console.log(person);
 person.talk();
 //person.tellAge();

// Subclasses

class Developer extends Person {
    constructor(name, age, yearsOfExp, position) {
        super(name, age);
        this.yearsOfExp = yearsOfExp;
        this.position = position;
        this.testCode = '1234';
    }

    code = function(language) {
        console.log(`I am writing a ${language} application!`);
    }
}

const jayson = new Developer('Jayson', 29, 8, 'Lead Developer');
// console.log(jayson);
// jayson.code('Salesforce');

// console.log(jayson instanceof Person);
// console.log(jayson instanceof Developer);
console.log(jayson.testCode);
class ProjectManager extends Person {
    constructor(name, age, numProjectsHandled) {
        super(name, age);
        this.numProjectsHandled = numProjectsHandled;
    }

    manage = function (project) {
        console.log(`I am managing ${project}`);
    }
}

const anne = new ProjectManager('Anne', 48, 20);
anne.manage('OrgBuilder');