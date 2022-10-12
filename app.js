const express = require('express')
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");



const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})