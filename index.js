const express = require("express");
const mongoose= require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const connectedToDb = require("./configs/db");
const travelRouter = require("./routes/travel.routes");
const port = process.env.port || 8001;





require("dotenv").config(); // important

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());





// app.use("/", (req,res) =>{
//     res.send({msg:"welcome to air plan my trip"})
// })

app.use("/api", travelRouter);









app.listen(process.env.port, async() =>{
    try {
        await connectedToDb
        console.log("connected to mongoAtlas")
    } catch (error) {
        console.log(" not connected to mongoAtlas")
        console.log(error);
    }
    console.log(`server is running on port ${process.env.port}`)
 })



 module.exports = app;