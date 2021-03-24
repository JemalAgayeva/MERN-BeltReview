
const mongoose = require('mongoose');

// Basic setup of the Mongoose Schema
const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:[true,"Name is required"],
        minlength: [3,"Name has to be not less than 3 characters"]
    },
    last_name: {
        type: String,
        required:[true,"Name is required"],
        minlength: [3,"Name has to be not less than 3 characters"]
    },
    graduation_date:{
        type: Date,
        required:[true,"Graduation date is required"],
    },
    profile_picture: {
        type: String,
        required:[true,"Photo is required"]
    },
    number_of_belts:{
        type: Number
    },
    is_vet:{
        type: Boolean
    }
})


// This is how we register our schema.
const Student = mongoose.model("Student", StudentSchema);

// Finally we export it out of the file.
module.exports = Student;
