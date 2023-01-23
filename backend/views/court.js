const express = require("express");
const router = express.Router();

const {
    CreateCourt,
    AddEvent,
    CourtPrint,
    EventPrint
} = require("../controllers/courtController");

router.post("/createcourt", CreateCourt);
router.post("/addevent", AddEvent);
router.get("/courtmap", CourtPrint)
router.post("/eventprint", EventPrint)


module.exports = router;
