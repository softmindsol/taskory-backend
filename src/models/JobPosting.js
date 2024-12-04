import mongoose from "mongoose";


const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the client who posted the job
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: false // Optional field
    },
    skillsRequired: {
        type: [String], // Array of skills required for the job
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Completed', 'Cancelled'], // Current status of the job
        default: 'Open'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
 