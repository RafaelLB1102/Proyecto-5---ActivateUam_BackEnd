const EXPRESS = require("express");
const {getEventsUAM,
    createEventUAM,
    deleteEventUAM,
    updateEventUAM} = require("../controllers/EventUAMController")
const EVENT_ROUTER = EXPRESS.Router()

EVENT_ROUTER.get("/",getEventsUAM);
EVENT_ROUTER.post("/",createEventUAM);
EVENT_ROUTER.put("/:event_id",updateEventUAM);
EVENT_ROUTER.delete("/:event_id",deleteEventUAM);

