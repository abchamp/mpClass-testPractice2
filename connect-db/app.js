const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const todo = require('./todo.js');
var port = process.env.PORT || 3001;
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/todo', todo);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))