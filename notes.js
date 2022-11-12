const chalk = require('chalk')
const fs = require('fs')


const addNote = (title, body)=> {
  const notes = loadNotes()

    const duplicateNote = notes.find((note)=> note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green("New note added!"))
  } else {
    console.log(chalk.red("Note title is taken."))
  }

}




const removeNote=(title)=> {
  const notes = loadNotes()
  const notesToRemove =[]
  if (notes.length !==0){

    for (i =0; i < notes.length; i++){
      if(notes[i].title===title){
        notes.splice(notes[i],1)
        notesToRemove.push(notes[i])
        console.log(chalk.green(`Note with title \"${title}\" successfully removed.`))
      }
    }
    saveNotes(notes)

  }else{
    console.log(chalk.red("No notes found!"))
  }
  if(notesToRemove.length===0){
    console.log(chalk.red("Unable to find the note"))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  if (notes.length!==0){
    notes.forEach((note)=>console.log(chalk.cyan(note.title)))
  }else{
    console.log(chalk.red("No Notes Found!"))
  }

}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note)=> note.title === title)

  if(note){
    console.log(chalk.inverse( note.title))
    console.log((note.body))
  }else{
    console.log(chalk.red("No Note Found!"))
  }

}

const saveNotes= (notes)=> {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}




const loadNotes=()=> {
  try {
    const data = fs.readFileSync('notes.json').toString()
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}



module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
