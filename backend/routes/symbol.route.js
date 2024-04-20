const express = require("express");
const Symbols = require("../models/symbol.model.js");
const router = express.Router();
const { getSymbols, getSymbol, createSymbol, updateSymbol, deleteSymbol } = require("../controllers/symbol.controller.js");


// get a symbol
router.get('/', getSymbols);
router.get('/:id', getSymbol);

// create a symbol
router.post('/', createSymbol);

// update a symbol
router.put('/:id', updateSymbol);

// delete a symbol
router.delete('/:id', deleteSymbol);



module.exports = router;