const express = require("express");
const router = express.Router();

const {
    CreateCourt,
    AddEvent,
} = require("../controllers/courtController");

router.post("/createcourt", CreateCourt);
router.post("/addevent", AddEvent);


module.exports = router;
