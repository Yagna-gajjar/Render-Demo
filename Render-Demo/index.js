const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const Secret = process.env.secret

app.get('/', (req, res) => {
    res.status(200).send("server started");
}
)

app.get('/about', (req, res) => {
    res.status(200).send(`server started ${Secret}`);
}
)

app.listen(5000, () => {
    console.log("server running");
})