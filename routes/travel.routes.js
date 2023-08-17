const express=require("express");
const travelModel = require("../models/travel.model");



const travelRouter = express.Router();

travelRouter.post("/post", async (req,res)=>{
    const payload=req.body
    try {
        const newTravel=new travelModel(req.body)
        await newTravel.save()
        res.status(201).send({"msg":"travel added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
 });

 // get route
 travelRouter.get("/get", async(req,res)=>{

    try {
            const travel = await travelModel.find();
            res.status(200).send(travel);
        
        } catch (error) {
        res.status(400).send({"msg":error.message})
        }
})

// delete route for delete a specific travel identified by its ID.
travelRouter.delete("/delete/:id", async(req,res)=>{

    const id=req.params.id
    try {
        await travelModel.findByIdAndDelete({_id:id})
        res.status(202).send({"msg":"travel Deleted"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

// filter data based on destination

travelRouter.get("/filter", async(req,res)=>{
    const destination = req.query.destination;

    try {
            const filterData = await travelModel.find({destination});
            res.status(200).send(filterData);
        
        } catch (error) {
        res.status(400).send({"msg":error.message})
        }
})

// sort data based on budget
travelRouter.get("/sort", async(req,res)=>{
    const sortDirecton = req.query.budget === "asc" ? 1 : -1;

    try {
            const sortedData = await travelModel.find().sort({budget: sortDirecton});
            res.status(200).send(sortedData);
        
        } catch (error) {
        res.status(400).send({"msg":error.message})
        }
})



module.exports = travelRouter;