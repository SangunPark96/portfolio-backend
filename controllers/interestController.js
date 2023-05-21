const express = require("express");
const interests = express.Router();
const {validateURL} = require("../validations/validations.js")

const { 
    getAllInterests,
    getInterest, 
    createInterest, 
    updateInterest, 
    deleteInterest } = require('../queries/interests.js')

// index
interests.get("/", async (req, res) => {
    const { error, result } = await getAllInterests();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

  // show
interests.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getInterest(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "Interest not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  // create
interests.post("/", validateURL, async (req, res) => {
    const { error, result } = await createInterest(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  });

  // update 
interests.put("/:id", validateURL, async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateInterest(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  //delete
interests.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteInterest(id);
    if (error) {
      res.status(404).json("Interest not found");
    } else {
      res.status(201).json(result);
    }
  });
  
  module.exports = interests