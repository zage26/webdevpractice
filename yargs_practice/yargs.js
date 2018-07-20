const yargs = require("yargs");
//METHOD CHANING
const argv = yargs
  //Modifies (adds a command) and then returns back yargs
  .command("add", "Adds a new note", {
    //Define options that are associated with this particular command
    title: {
      describe: "Title of note",
      alias: "t",
      //If you attempt to use the function without this property
      //the code will error/not work
      demandOption: true
    },
    body: {
      describe: "Body of note",
      alias: "b",
      demandOption: true
    }
  })
  .command("list", "Lists all notes")
  //Creates a --help option, tells the user all the options they have
  .help()
  //Makes custom options, can link with certain commands
  .option('find')
  //Gives the keyword an alias (another simpler way to activate it)
  .alias("help", "h")
  .argv
console.log(argv);
