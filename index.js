var express = require('express');
const router = require("./routes/users");
require('dotenv').config();
const morgan = require('morgan')
const app = express();


const users = require("./routes/users")
app.use(morgan('dev'));
app.use(express.json());

app.use("/user", users);

const PORT = process.env.DB_PORT || 2022

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})