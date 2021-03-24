
const mongoose = require('mongoose');

// Basic setup of the Mongoose Schema
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Name is required"],
        minlength: [3,"Name has to be not less than 3 characters"]
    },
    description: {
        required:[true,"Description is required"],
        type: String
    },
    // punchline: String
})


// This is how we register our schema.
const Project = mongoose.model("Project", ProjectSchema);

// Finally we export it out of the file.
module.exports = Project;
