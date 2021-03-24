
const ProjectController = require('../controllers/project.controller');
// const Project = require('../models/project.model');

module.exports = app => {
    app.get("/api/projects/all", ProjectController.findAllProjects);
    app.post("/api/projects/create", ProjectController.createOneProject);
    app.get("/api/projects/:projectId", ProjectController.findAProject);
    app.put("/api/projects/update/:projectId", ProjectController.updateAProject);
    app.delete("/api/projects/delete/:projectId", ProjectController.deleteAProject);
    // app.get("/api/project/random", ProjectController.randomProject);
}