const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001
// npm i body-parser cors --save
app.use(bodyParser.json()) // middle ware by another.
app.use(cors())

app.get('/', (req, res) => res.send('Hello World'))

app.post('/user', (req, res) => {
    console.log(req.body)
    // check db req.body.email 
    if( req.body.email == "c" && req.body.password == "1234") {
        res.json(user)
    }else {
        res.json({status: false})
    }
    // res.sendStatus(200)
})

app.post('/register', (req, res) => {
    res.sendStatus(200)
    // ins
})

app.listen(port, () => console.log(`Running ${port}`) )