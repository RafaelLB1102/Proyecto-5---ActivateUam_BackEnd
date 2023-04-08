const WEBINAR_SCHEMA = require("../models/Webminar")

const getWebminarUAM = ((req, res) => {
    WEBINAR_SCHEMA.find({ status: "active" })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const getWebminarbyId = ((req, res) => {
    WEBINAR_SCHEMA.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const createWebminar = ((req, res) => {
    const NEW_WEBMINAR = WEBINAR_SCHEMA(req.body);
    NEW_WEBMINAR.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const deleteWebminar = ((req, res) => {
    WEBINAR_SCHEMA.updateOne({ _id: req.params.id }, { status: "eliminated", eliminated_at: Date.now() })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

const updateWebminar = ((req, res) => {
    const update = { $set: req.body }
    WEBINAR_SCHEMA.updateOne({ _id: req.params.id }, update)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

module.exports = {
    getWebminarUAM,
    getWebminarbyId,
    createWebminar,
    deleteWebminar,
    updateWebminar
}
