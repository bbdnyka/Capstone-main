const express = require("express");
const Missions = require("../models/mission.model.js");
const router = express.Router();
const { getMissions, createMission } = require("../controllers/mission.controller.js");


// get a symbol
router.get('/', getMissions);

router.post('/', createMission);

module.exports = router;