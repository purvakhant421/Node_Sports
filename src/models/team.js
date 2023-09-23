const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
    {
        team_name : {
            type : String,
            trim : true,
        },
        sport : {
            type : String,
            trim : true,
        },
        foundedYear : {
            type : Number,
            default : 0
        },
        homeStadium : {
            type : String,
            trim : true,
        },
        teamColors : {
            type : String,
            trim : true,
        },
        headCoach : {
            type : String,
            trim : true,
        },
        captain : {
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

const Team = mongoose.model("Team" , teamSchema);
module.exports = Team;