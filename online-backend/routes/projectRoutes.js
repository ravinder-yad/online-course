const express = require("express");
const router = express.Router();
const { getProjects, getProjectById, createProject, deleteProject } = require("../controllers/projectController");

// Route to get all projects (with filtering)
router.get("/", getProjects);

// Route to get single project by ID
router.get("/:id", getProjectById);

// Route to create project
router.post("/", createProject);

// Route to delete project
router.delete("/:id", deleteProject);

module.exports = router;
