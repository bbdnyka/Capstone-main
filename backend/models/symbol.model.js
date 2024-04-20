const mongoose = require("mongoose");

const SymbolsSchema = mongoose.Schema(
    {
        
        image: {
            type: String,
            required: true
        },

        position: {
            type: Number,
            required: true,
            default: 0
        },

        id: {
            type: String,
            required: false,
        },

        color: {
            type: String,
            required: false,
        }

    },
    {
        timestamps: true
    }
);

const Symbols = mongoose.model("Symbol", SymbolsSchema);

module.exports = Symbols;