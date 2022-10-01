const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db")

dotenv.config({ path: './config/config.env'})


const port = process.env.PORT || 5000

connectDB();

const app = express();

app.use(express.json())

app.use('/api/v1/transaction', require('./routes/transaction'))
// app.get('/', (req, res) => res.send("hello"))

app.listen(port, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port number ${port}`.yellow.bold))