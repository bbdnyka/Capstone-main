const mongoose = require("mongoose");

const MissionSchema = mongoose.Schema(
    {
        
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: false
        },
        symbol: {
            type: String,
            required: false
        },
        longitude: {
            type: String,
            required: false
        },
        latitude: {
            type: String,
            required: false
        },
        

    },
    {
        timestamps: true
    }
);

const Missions = mongoose.model("Mission", MissionSchema);

module.exports = Missions;