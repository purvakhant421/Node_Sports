const mongoose = require("mongoose");
const founderSchema = new mongoose.Schema(
    {
        founder_name : {
            type : String,
            trim : true,
        },
        email : {
            type : String,
            trim : true,
        },
        company : {
            type : String,
            trim : true,
        },
        position : {
            type : String,
            trim : true,
        },
        location : {
            type : String,
            trim : true,
        },
        achievements : {
            type : String,
            trim : true,
        },
        bio : {
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

const Founder = mongoose.model("Founder" , founderSchema);
module.exports = Founder;