const yargs = require("yargs");
const notes = require("./notes.js");

const argv = yargs
  //Add
  .command("add", "Adds a new note", {
    title: {
      describe: "Title of the note",
      alias: "t",
      demandOption: true
    },
    body: {
      describe: "Body of the note",
      alias: "b",
      demandOption: true
    }
  })
  //List
  .command("list", "Lists all the notes")
  //Read
  .command("read", "Reads the body of the given note", {
    title: {
      describe: "Title of the note",
      alias: "t",
      demandOption: true
    }
  })
  //Remove
  .command("remove", "Removes the given note by title", {
    title: {
      describe: "Title of the note",
      alias: "t",
      demandOption: true
    }
  })
  //How can I make this an option??
  // .options("info" {
  //   alias: "i",
  //   describe: "This app is a note-taking app.\bThe user can add, remove, list"
  //           + " and read notes as they wish.\bUse the '--help' or '-h' function to"
  //           + " learn more about each command."
  // })
  .help()
  .alias("help", "h")
  .argv

const command = argv._[0];
const title = argv.title;
const body  = argv.body;

  //Add a note
if(command === "add") {
  const noteAdded = notes.addNote(title, body);
  console.log(noteAdded ? "Note added." : "Note already exists.");
  //List all notes
} else if (command === "list") {
  notes.listNotes(notes.fetchNotes());
  //Read body by title
} else if (command === "read") {
  const readNote = notes.readNote(title);
  console.log(readNote === true ? "" : "That note does not exist.");
  //Filter for everything that is NOT that title
} else if(command === "remove") {
  const noteRemoved = notes.removeNote(title);
  console.log(noteRemoved ? "Note removed." : "That note does not exist.");
}
