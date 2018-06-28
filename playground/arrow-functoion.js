var square = x => x * x;

console.log(square(9));

var user = {
  name: 'Raj',
  sayHi: () => {
    console.log(arguments); // returns global arguments but not whats passed into it
    console.log(`hi my name is ${this.name}`); //this literal is not avilable
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`hi my name is ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
