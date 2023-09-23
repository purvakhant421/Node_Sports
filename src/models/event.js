const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
    {
        event_name : {
            type : String,
            trim : true,
        },
        title : {
            type : String,
            trim : true,
        },
        location : {
            type : String,
            trim : true,
        },
        description : {
            type : String,
            trim : true,
        },
        organizer : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Event = mongoose.model("Event" , eventSchema);
module.exports = Event;