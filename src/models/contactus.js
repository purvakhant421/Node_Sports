const mongoose = require("mongoose");
const contactusSchema = new mongoose.Schema(
    {
        organizationName : {
            type : String,
            trim : true,
        },
        address : {
            type : String,
            trim : true,
        },
        phone : {
            type : Number,
            default : 0
        },
        email : {
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

const Contactus = mongoose.model("Contactus" , contactusSchema);
module.exports = Contactus;