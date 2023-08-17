const mongoose = require("mongoose");

const travelSchema = mongoose.Schema({
       
        name: String,
        email: String,
        destination: String,
        travelers: String,
        budget : Number
})

const travelModel = mongoose.model("travel", travelSchema);

module.exports = travelModel;