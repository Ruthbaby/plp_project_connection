const express = require('express');
const session = require('express-session');
const MySQLStore = require('connect-mysql2')(session);
require('dotenv').config();

const db = require('./config/db');
const authRoutes = require('./routes/auth');

// initialize server
const app = require();

// set-up middleware
app.use(express.json());

// set-up session
app.use(
  session({
    key: 'users_id',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: new MySQLStore({}, db)
  })
)
// routes
// app.get('/', req, res)

app.use('/auth', authRoutes)

//start server
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
