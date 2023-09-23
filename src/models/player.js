const { string } = require("joi");
const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema(
    {
        player_name : {
            type : String,
            trim : true,
        },
        sport : {
            type : String,
            trim : true,
        },
        position : {
            type : String,
            trim : true,
        },
        jerseyNumber : {
            type : Number,
            default : 0
        },
        birthDate : {
            type : Number,
            default : 0
        },
        height_weight : {
            type : String,
            trim : true,
        },
        nationality : {
            type : String,
            trim : true,
        },
        college : {
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

const Player = mongoose.model("Player" , playerSchema);
module.exports = Player;