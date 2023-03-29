const EVENTUAM_SCHEMA = require("../models/EventUAM")
const MONGOOSE = require("mongoose");

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

const createEventUAM = ((req, res) => {
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

