//require fs, path, require('uuid/v1'), and express
// create a variable called router and set it to express.router()

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = require('express').Router();
const uuid = require('uuid');


​
module.exports = (app) => {

app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});


app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('.db/db.json'));
    const deleteNote = notes.filter((removeNote) => removeNote.id ! == req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
})

 

}