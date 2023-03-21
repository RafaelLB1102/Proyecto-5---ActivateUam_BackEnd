const MONGOOSE = require("mongoose")

const EVENTUAM_SCHEMA = MONGOOSE.Schema({
    name : {type:String, require : true},
    place : {type:String, require : true},
    event_date : {type:Date, require : true, default : Date.now()},
    start_time : {type:String,require:true},
    end_time : {type : String, require : true},
    category : {type : String,require: true},
    status : {type : String, require : true},
    image_url : {type : String, require : true},
    created_at : {type:Date, require : true, default : Date.now()},
    updated_at : {type:Date, require : true, default : Date.now()},
    eliminated_at : {type:Date, require : true, default : Date.now()},

});

module.exports = MONGOOSE.model("EventUAMCollection",EVENTUAM_SCHEMA);