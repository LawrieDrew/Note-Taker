const path = require('path');

module.exports = (app) => {

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));

});

app.get("notes", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});

}