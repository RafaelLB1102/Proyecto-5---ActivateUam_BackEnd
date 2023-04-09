const WEBINAR_SCHEMA = require("../models/Webminar")
const { body, validationResult } = require('express-validator');
const { validateWebminar } = require("../validators/WebminarValidator")

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

const createWebminar = (
    body("presentation_date","Fecha Invalida").isDate(),
    body("start_time").isTime(),
    body("url").isURL(),
    (req, res) => {
        const VALIDATION_ERRORS = validateWebminar(req,res)
        const LIB_ERRORS = validationResult(req);
        const ERRORS = VALIDATION_ERRORS.concat(LIB_ERRORS)
        
        if(ERRORS.length > 0){
            return res.status(400).json({ errors: ERRORS.array() });
        }


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
