import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    jobContractId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobContract', // Reference to the completed job contract
        required: true
    }, 
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Freelancer who worked on the project
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Client who gave the review
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    qualityOfWork: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    timeliness: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    communication: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    professionalism: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;

