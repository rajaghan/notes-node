// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const fs = require('fs');
// var originalNote = {
//   title: 'some title',
//   body: 'some body'
// };
// //originalNoteString
// var originalNoteString = JSON.stringify(originalNote);
// fs.writeFileSync('notes.json', originalNoteString);
//
// var noteString = fs.readFileSync('notes.json');
// var note = JSON.parse(noteString);
// console.log(note);
// console.log(note.title);
// console.log(note.body);

class Obj {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
var arr = [new Obj("John", 2), new Obj('Mark', 3)];
console.log(arr);
arr.forEach((e) => console.log(e));

console.log(arr.find((e) => e.name === 'Mark'));
