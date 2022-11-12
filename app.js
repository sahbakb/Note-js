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
  handler(argv) {
    note.addNote(argv.title, argv.body)
  }
}
)
yargs.command({
  command: 'remove',
  describe: 'removing the note',
  builder:{
    title:{
      describe:"Note title",
      demandOption:true,
      type: 'string'
    }
  },
  handler(argv) {
    note.removeNote(argv.title)
  }
})
yargs.command({
  command: 'list',
  describe: 'listing out all the notes',
  handler() {
    note.listNotes()
  }
})
yargs.command({
  command: 'read',
  describe: 'read the note',
  builder:{
    title:{
      describe:"Read Note",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    note.readNote(argv.title)
  }
})
yargs.parse()
// console.log(yargs.argv)
