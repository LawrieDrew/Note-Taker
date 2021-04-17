const fs = require('fs');
const express = require('express');
const db = require('./db/db.json');
const path = require('path');
const uuid = require('uuid');
//not sure if uuidv4 needs to be its own thing?

const app = express();
const PORT = process.env.PORT || 3030;

//middleware or as I like to call it Meddle-Ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));



//Routes idk wtf these aren't working 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

//confirmed app is listening on PORT 3030!! Woo!!