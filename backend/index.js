const mongoose = require('mongoose'); // import mongoose
const express = require('express'); // import express
const Symbols = require("./models/symbol.model.js"); // import model
const symbolRoute = require("./routes/symbol.route.js"); // import routes
const missionRoute = require("./routes/mission.route.js");
const cors = require('cors');
const app = express();//import express

// middleware 
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/symbols", symbolRoute);
app.use("/missions", missionRoute);


// check express app
app.get('/', (req, res) => {
  res.send("Hello from Node API.");
});

// Database connect.
mongoose.connect("mongodb+srv://browden2:13579@cluster0.m1httlq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database.");
    // Start server on localhost:3000
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
    })
  })
  .catch(() => {
    console.log("Connection failed.");
  });
