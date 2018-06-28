const fs = require('fs');

var fetchNotes = () => {
  //if the file does not exist do not read
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //filter duplicates
  //duplicateNotes gets populated with notes that have the title
  //of passed in title
  var duplicateNotes = notes.filter((note) => note.title === title);

  //add only if no duplicates
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //return the note matching the title
  return notes.find((e) => e.title === title);
};

var removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();

  //filter and remove note with title,
  //filteredNotes gets populated with notes that does not equal to the title
  //-passed in
  var filteredNotes = notes.filter((note) => note.title !== title);

  //save notes
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log(`Title: ${note.title} Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
