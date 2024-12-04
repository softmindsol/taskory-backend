//This Schema Shows Tasks in Figma (Front End , Backend )

import mongoose from "mongoose";

// Define the Gig schema
const gigSchema = new mongoose.Schema({
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer', // Reference to the Freelancer model
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service', // Reference to the Service model
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 // Limit the title length
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000 // Limit the description length
    },
    
    category: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: {
        type: String,
        trim: true
    },
    tags: [String], // Array of strings for searchable tags
    additionalFeatures: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true, min: 0 }
        }
    ],
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Draft'], // Gig status options
        default: 'Active'
    },
    gallery: [String], // Array of image or media URLs
    
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Compile the schema into a model
const Gig = mongoose.model('Gig', gigSchema);
export default Gig;
