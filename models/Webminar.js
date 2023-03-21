const MONGOOSE = require("mongoose")

const WEBMINAR_SCHEMA = MONGOOSE.Schema({
    name : {type:String, require : true},
    presentation_date : {type:Date, require : true, default : Date.now()},
    start_time : {type:String, require : true},
    status : {type:String,require:true},
    url : {type:String,require:true},
    speakers : [{
        type:Object,
        required : true,
        name : {type:String,require:true},
        majors : [{type : String}]
    }]
})

module.exports = MONGOOSE.model("WebminarCollection", WEBMINAR_SCHEMA);