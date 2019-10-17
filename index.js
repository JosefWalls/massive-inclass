const express = require("express");
const massive = require("massive")
const dotenv = require("dotenv")
dotenv.config();

const app  = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)// add ?ssl=true
    .then(dbInstance => {
        app.set("db", dbInstance);
        console.log("DB Connected")
    }).catch(error => {
        console.log(error)
    })

app.listen(5050, () => console.log("5050"));