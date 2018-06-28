const fs = require('fs'); //built-in modules
const _ = require('lodash'); //utilities module - 3rd party - very popular
const yargs = require('yargs'); //argument parsing

const notes = require('./notes.js'); //custom module

const titleOptions = {
  decsribe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  decsribe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a new note', {
    title: titleOptions
  })
  .command('remove', 'Remove a new note', {
    title: titleOptions
  })
  .help()
  .argv;

//var command = process.argv[2]; //process.argv reutrns the arguments array.
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  console.log(' ======= ADD NOTE ===========');
  if (note) {
    notes.logNote(note);
  } else {
    console.log(`Note with title ${argv.title} already exists`);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(' ======= ALL NOTES ===========');
  if (allNotes) {
    allNotes.forEach((note) => notes.logNote(note));
  } else {
    console.log('No notes found');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  console.log('======= GET NOTE ==========');
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  console.log('======= REMOVE NOTE ==========');
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log("Command not recognized");
}
