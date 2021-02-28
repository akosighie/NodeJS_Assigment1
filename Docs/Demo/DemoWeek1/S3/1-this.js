function printGlobal() {
    console.log(this);
}

// name = "test";

// printGlobal();

const person = {
    firstName: 'Jayson',
    lastName: 'Opena',
    getFullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
}


const fullname = person.getFullName();
console.log(fullname);