const Symbols = require("../models/symbol.model.js");



const getSymbols = async (req, res) => {


    try {
        const symbols = await Symbols.find();
        res.status(200).json(symbols);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}


const getSymbol = async (req, res) => {


    try {
        const { id } = req.params;
        const symbol = await Symbols.findById(id);
        res.status(200).json(symbol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}


const createSymbol = async (req, res) => {


    try {
        const symbol = await Symbols.create(req.body);
        res.status(200).json(symbol); //success
    } catch (error) {
        res.status(500).json({ message: error.message }) //error 
    }


}


const updateSymbol = async (req, res) => {


    try {
        const { id } = req.params;
        const symbol = await Symbols.findByIdAndUpdate(id, req.body);

        if (!symbol) {
            return res.status(404).json({ message: "Symbol not found" });
        }
        // checking symbol after update
        const updatedSymbol = await Symbols.findById(id);
        res.status(200).json(updatedSymbol);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

const deleteSymbol = async (req, res) => {


    try {
        const { id } = req.params;
        const symbol = await Symbols.findByIdAndDelete(id);

        if (!symbol) {
            return res.status(404).json({ message: "Symbol not found" });
        }

        res.status(200).json({ message: "Symbol deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

module.exports = {
    getSymbols,
    getSymbol,
    createSymbol,
    updateSymbol,
    deleteSymbol
}