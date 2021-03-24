
const ProjectController = require('../controllers/student.controller');
// const Project = require('../models/project.model');

module.exports = app => {
    app.get("/api/students/all", ProjectController.findAllProjects);
    app.post("/api/students/create", ProjectController.createOneProject);
    app.get("/api/students/:projectId", ProjectController.findAProject);
    app.put("/api/students/update/:projectId", ProjectController.updateAProject);
    app.delete("/api/students/delete/:projectId", ProjectController.deleteAProject);
    // app.get("/api/students/random", ProjectController.randomProject);
}