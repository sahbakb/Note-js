const yargs = require('yargs')
const note = require('./notes.js')


yargs.command({
  command: 'add',
  describe: 'Adding a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.addNote(argv.title, argv.body)
  }
}
)
yargs.command({
  command: 'remove',
  describe: 'removing the note',
  handler: function () {
    console.log("note removed")
  }
})
yargs.command({
  command: 'list',
  describe: 'listing out all the notes',
  handler: function () {
    console.log("listing out all the notes")
  }
})
yargs.command({
  command: 'read',
  describe: 'read the note',
  handler: function () {
    console.log("reading the note")
  }
})
yargs.parse()
// console.log(yargs.argv)
