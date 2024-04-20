const Missions = require("../models/mission.model.js");



const getMissions = async (req, res) => {


    try {
        const missions = await Missions.find();
        res.status(200).json(missions);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

const createMission = async (req, res) => {


    try {
        const mission = await Missions.create(req.body);
        res.status(200).json(mission); //success
    } catch (error) {
        res.status(500).json({ message: error.message }) //error 
    }


}


module.exports = {
    getMissions,
    // getSymbol,
     createMission,
    // updateSymbol,
    // deleteSymbol
}