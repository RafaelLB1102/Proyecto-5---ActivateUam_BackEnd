const EVENTUAM_SCHEMA = require("../models/EventUAM")
const { body, validationResult } = require('express-validator');
const { validateEventUAM } = require("../validators/EventUAMValidator")

/* "name" : "Prueba Desactivado",
"place" : "Sacatín",
"event_date" : "2023-03-28",
"start_time" : "14:00",
"end_time" : "15:00",
"category" : "Manualidades",
"status": "eliminated",
"image_url" : "../src/imgs/photo1.png" */

const getEventsUAM = ((req, res) => {
    EVENTUAM_SCHEMA.find({ status: "active" })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const getEventsUAMbyId = ((req, res) => {
    EVENTUAM_SCHEMA.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const createEventUAM = (
    body("event_date").isDate(),
    body("start_time").isTime(),
    body("end_time").isTime(),
    (req, res) => {
    const VALIDATION_ERRORS = validateEventUAM(req,res)
    const LIB_ERRORS = validationResult(req);
    const ERRORS = VALIDATION_ERRORS.concat(LIB_ERRORS)
    
    if(ERRORS.length > 0){
        return res.status(400).json({ errors: ERRORS.array() });
    }
    
    const NEW_EVENT = EVENTUAM_SCHEMA(req.body);
    NEW_EVENT.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const deleteEventUAM = ((req, res) => {
    EVENTUAM_SCHEMA.updateOne({ _id: req.params.id }, { status: "eliminated", eliminated_at: Date.now() })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const updateEventUAM = ((req, res) => {
    const update = { $set: req.body }
    EVENTUAM_SCHEMA.updateOne({ _id: req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

module.exports = {
    getEventsUAM,
    createEventUAM,
    deleteEventUAM,
    updateEventUAM,
    getEventsUAMbyId
}

