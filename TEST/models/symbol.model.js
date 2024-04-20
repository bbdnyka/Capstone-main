//const Generate = require("../index.js")
const mongoose = require("mongoose");

const SymbolsSchema = mongoose.Schema(
    {
        
        svg: {
            type: String,
            unique: true // Ensure uniqueness of the svg field
        }
    },
    {
        timestamps: true
    }
);

const Symbols = mongoose.model("Symbol", SymbolsSchema); // this is connected to the database

module.exports = Symbols;