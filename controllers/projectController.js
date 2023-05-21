const express = require("express");
const projects = express.Router();
const {validateURL} = require("../validations/validations.js")

const { 
    getAllProjects,
    getProject, 
    createProject, 
    updateProject, 
    deleteProject } = require('../queries/projects.js')

// index
projects.get("/", async (req, res) => {
    const { error, result } = await getAllProjects();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

  // show
projects.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getProject(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "Project not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  // create
projects.post("/", validateURL, async (req, res) => {
    const { error, result } = await createProject(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  });

  // update 
projects.put("/:id", validateURL, async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateProject(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  //delete
projects.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteProject(id);
    if (error) {
      res.status(404).json("Project not found");
    } else {
      res.status(201).json(result);
    }
  });
  
  module.exports = projects