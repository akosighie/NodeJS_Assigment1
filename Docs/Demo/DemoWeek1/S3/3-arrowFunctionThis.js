
const jayson = {
    name: 'jayson',
    age: 29,
    printName: function () {
        //this.name points to 'this' of jayson object
        console.log(this.name);
    },
    printNameArrow: () => {
        //this.name points to 'this' of global object
        console.log(this.name);
    },
    greet: function(people) {
        //console.log(this);
        const that = this;
        people.forEach(function (person) {
            //'this' refers to the global object
            // console.log(this);
            console.log(`Hi ${person}, my name is ${that.name}`); 
        });
    },
    greetArrow: function (people) {
        people.forEach(person => {
            //'this' refers to the 'this' of greetArrow function which is the jayson object
            console.log(`Hi ${person}, my name is ${this.name}`); 
        });
    }
}

// jayson.printName();
// jayson.printNameArrow();
// jayson.greet(['Mily', 'Paul']);
jayson.greetArrow(['Mily', 'Paul']);
