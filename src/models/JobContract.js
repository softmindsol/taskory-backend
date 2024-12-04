import mongoose from "mongoose";

const jobContractSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobPosting', // Reference to the original job posting
        required: true
    },
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer', // Freelancer who completed the job
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Client who posted the job
        required: true
    },
    agreedBudget: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    completionDate: {
        type: Date, // Date when the job was marked as completed
        required: true
    },
    status: {
        type: String,
        enum: ['Completed', 'Cancelled'], // Finalized statuses
        required: true
    },
    // feedback: {
    //     type: String, // Client feedback about the job
    //     trim: true
    // },
    // freelancerRating: {
    //     type: Number, // Client rating for the freelancer (1-5)
    //     min: 1,
    //     max: 5
    // },
    // clientRating: {
    //     type: Number, // Freelancer rating for the client (1-5)
    //     min: 1,
    //     max: 5
    // }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

const JobContract = mongoose.model('JobContract', jobContractSchema);
export default JobContract;
