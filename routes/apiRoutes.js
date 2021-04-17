//require fs, path, require('uuid/v1'), and express
// create a variable called router and set it to express.router()

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = require('express').Router();
const uuid = require('uuid');

module.exports = (app) => {

    //get the notes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

    //post the notes & allocate id

app.post("/api/notes", (req, res) => {
    console.log('Duly Noted!');
    const newNote = req.body;
    newNote.id = uuid;
    db.push(newNote.id);
//  console.log(
//     "title":"Test Title 1",
//     "text":"Test text",
//     "id": 1)


//if there's an error, throw 500 message

if (err) throw err;
console.log('500');
});

    //delete note
app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('.db/db.json'));
    const deleteNote = notes.filter((removeNote) => removeNote.id ! == req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
})

 

}