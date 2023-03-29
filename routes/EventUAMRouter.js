const EXPRESS = require("express");
const {getEventsUAM,
    createEventUAM,
    deleteEventUAM,
    updateEventUAM,
    getEventsUAMbyId
} = require("../controllers/EventUAMController")
const EVENT_ROUTER = EXPRESS.Router()
const EVENTUAM_SCHEMA = require("../models/EventUAM")

EVENT_ROUTER.get("/",getEventsUAM);
EVENT_ROUTER.post("/event",createEventUAM);
EVENT_ROUTER.get("/:id",getEventsUAMbyId)
EVENT_ROUTER.put("/:id",updateEventUAM);
EVENT_ROUTER.delete("/:id",deleteEventUAM);

module.exports = EVENT_ROUTER;
