// > node inspect debugging.js -  starts the debugging mode
// debug> n  - to traverse to next line
// debug> c  - to continue
// debug> repl - to get into the console module (ctrl-c to get out repl mode )
// debug> ctrl-c twice to get out of debug mode

const person = {
  name: 'Raj'
};

person.age = 38;
debugger; // this causes the nodejs debugger to stop at this line
person.name = 'Ghanta';
console.log(person);
