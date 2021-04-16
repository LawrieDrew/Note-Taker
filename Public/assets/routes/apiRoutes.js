const fs = require('fs');
const db = require('./db/db.json');


app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"))
});

app.post("api/notes", (req, res) => {
    console.log('Thanks for the note!');
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});
 // need to console log the res status 500 error thingy 

//app.delete("/api/notes/:id", (req, res) => {
   // const notes = JSON.parse(fs.readFileSync('.db/db.json'));
    //const deleteNote = notes.filter((removeNote) => removeNote.id ! == req.params.id);
    //fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
   // res.json(deleteNote);
//})

//delete throwing a wrench into node, fix later 