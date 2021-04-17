const fs = require('fs');
const path = require('path');
//const db = require('./db/db.json');

module.exports = (app) => {

app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});


//app.delete("/api/notes/:id", (req, res) => {
   // const notes = JSON.parse(fs.readFileSync('.db/db.json'));
    //const deleteNote = notes.filter((removeNote) => removeNote.id ! == req.params.id);
    //fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
   // res.json(deleteNote);
//})

//delete throwing a wrench into node, fix later 

}