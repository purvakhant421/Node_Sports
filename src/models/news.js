const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema(
    {
        headline : {
            type : String,
            trim : true,
        },
        date_published : {
            type : Number,
            default : 0
        },
        author : {
            type : String,
            trim : true,
        },
        content : {
            type : String,
            trim : true,
        },
        tags : {
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

const News = mongoose.model("News" , newsSchema);
module.exports = News;