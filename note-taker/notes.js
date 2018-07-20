const fs = require("fs");

//RETRIEVING DATA METHODS
const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

const addNote = (title, body) => {
  const note = { title, body }
  const notes = fetchNotes();
  if (notes.every(n => n.title != note.title)) {
    notes.push(note);
    saveNotes(notes);
    return true;
  } else {
    return false;
  }
}

const removeNote = (title) => {
  const notes = fetchNotes();
  const newNotes = notes.filter(n => n.title != title);
  const specificNote = notes.filter(n => n.title === title);
  if(specificNote.length === 0) {
    return false;
  } else {
    saveNotes(newNotes);
    return true;
  }
}

const readNote = (title) => {
  let exist = false;
  let notes = null;
  fetchNotes().forEach(note => {
    if (note.title === title) {
      exist = true;
      notes = note;
    }
  })
  if(exist === true) print(notes);
  return exist;
}

//VIEWING METHODS
const listNotes = (notes) => {
  notes.forEach(note => print(note));
}

const print = (note) => {
  console.log("---");
  console.log("Title: " + note.title);
  console.log("Body: " + note.body);
}

//EXPORTS
module.exports = { addNote, listNotes, readNote, removeNote, fetchNotes }
