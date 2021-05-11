const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');



const app = express();
const db = process.env.DATABASE_URI;
const PORT = process.env.PORT || 8080;

connectDB(db);

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

app.post('/login', (req,res)=>{
    console.log(req.json());
})

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));

