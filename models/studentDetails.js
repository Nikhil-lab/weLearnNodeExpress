const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

// Create Schema
const StudentInfoSchema = new Schema({
    studentId: {
        type: String
    },
    studentName: {
        type: String    
    },
    studentEmail: {
        type: String
    },
    studentMajor: {
        type: String
    },    
    grade: {
        type: String
    },
    coursesselected: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:  "Course" 
        }      
    ],
    assignmentSubmitted: [{
            courseId: String,
            submissionLink: String
    }]
    
            
    ,    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Studentinfo = mongoose.model("studentinfo", StudentInfoSchema);