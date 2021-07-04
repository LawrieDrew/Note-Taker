const fs = require('fs');
const db = require('./db/db.json');

const uuid = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        console.log('Duly noted!');
        const newNote = req.body;
        newNote.id = uuid();
        console.log(newNote.id);
        db.push(newNote)
        console.log(
            `'title': '${newNote.title}',
           'text': '${newNote.text}',
           'id': '${newNote.id}',
           posted to db.json`
        );
        fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
            if (err) throw err;
            console.log('New Note Up!')
        });
        res.json(newNote);
    })};

    app.delete('/api/notes/:id', (req, res) => {
        const updatedDb = db.filter((deletedNote) => deletedNote.id != req.params.id);
        db = updatedDb;
        fs.writeFile('./db/db.json', JSON.stringify(updatedDb), (err) => {
          if (err) throw err;
        });
        console.log('Note deleted');
        res.json(updatedDb);
      });