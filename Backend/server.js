const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

const idxPath = __dirname + '/views/index.html';

app.get('/', (req,res) => {
    res.sendFile(idxPath);
})

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));