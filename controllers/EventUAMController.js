const EVENTUAM_SCHEMA = require("../models/EventUAM")

const getEventsUAM = ((req,res) => {
    EVENTUAM_SCHEMA.find({status : "active"})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

const createEventUAM = ((req,res)=>{
    const NEW_EVENT = EVENTUAM_SCHEMA(req.body);
    NEW_EVENT.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

const deleteEventUAM = ((req,res)=>{
    const {EVENT_ID} = req.params;
    EVENTUAM_SCHEMA.updateOne({_id : EVENT_ID},{status : "eliminated",eliminated_at : Date.now()})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

const updateEventUAM = ((req, res) => {
    const {EVENT_ID} = req.params;
    const {name, 
        place, 
        event_date, 
        start_time, 
        end_time, 
        category, 
        status, 
        image_url} = req.body;
        EVENTUAM_SCHEMA.updateOne({_id : EVENT_ID},{name, 
            place, 
            event_date, 
            start_time, 
            end_time, 
            category, 
            status, 
            image_url}) 
        .then((data) => res.json(data))
        .catch((err) => res.json({message : err}))
})

module.exports = {
    getEventsUAM,
    createEventUAM,
    deleteEventUAM,
    updateEventUAM
}

