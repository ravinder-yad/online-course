const Project = require("../models/Project");

// Get all projects with filtering
exports.getProjects = async (req, res) => {
  try {
    const { category, search, difficulty, sort } = req.query;
    let query = {};

    if (category && category !== "All") {
      query.category = category;
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let projectsQuery = Project.find(query);

    // Sorting
    if (sort === "latest") {
      projectsQuery = projectsQuery.sort({ createdAt: -1 });
    } else if (sort === "popular") {
      projectsQuery = projectsQuery.sort({ rating: -1 });
    }

    const projects = await projectsQuery;
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
};

// Get single project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("userId", "name email");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error: error.message });
  }
};

// Create project
exports.createProject = async (req, res) => {
  try {
    const { title, description, category, techStack, image, demoLink, githubLink, difficulty } = req.body;
    
    const project = new Project({
      title,
      description,
      category,
      techStack,
      image,
      demoLink,
      githubLink,
      difficulty,
      userId: req.user ? req.user.id : null, // Assume auth middleware adds user
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error: error.message });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
};
