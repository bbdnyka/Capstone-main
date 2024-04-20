import ms from "milsymbol";
const mongoose = require('mongoose'); // import mongoose
const express = require('express'); // import express
const Symbols = require('./models/symbol.model.js');// import databse model
//const generate = require("generateSymbol.js")
const app = express();



//middleware
app.use( express.json());



// milsymbol generator
const symbol = new ms.Symbol('SFG-UCI----D');
const Generate = symbol.asSVG();
console.log("Svg working");



// create new symbol using model (models folder)
const newSymbol = new Symbols({
    svg: Generate
});



// // Save the symbol to the database
// newSymbol.save()
//     .then(savedSymbol => {
//         console.log("Symbol saved successfully:", savedSymbol);
    
//     })
//     .catch(error => {
//         console.error("Error saving symbol:", error);
//     });




// get symbols from database
app.get('/api/symbols', async (req, res) => {
    try {
        const symbols = await Symbols.find();
        res.status(200).json(symbol);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});




// add symbols to database
app.post('/api/symbols', async (req, res) => {

    try {
        const symbols = await Symbols.create(newSymbol); // using created symbol from model here
        res.status(200).json({symbols}); //success
    } catch (error) {
        res.status(500).json({ message: error.message }) //error 
    }
});


// update a symbol
app.put('/api/symbols/:id', async (req, res) => {

})




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


