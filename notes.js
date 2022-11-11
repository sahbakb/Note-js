

const fs = require('fs')


function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title is taken.")
    }

}



function saveNotes(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}




function loadNotes() {
    try {
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    } catch (error) {
        return []
    }

}



module.exports = {
    addNote: addNote,
}