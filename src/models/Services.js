import mongoose from "mongoose";

// Define the Service schema
const serviceSchema = new mongoose.Schema({
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer', // Reference to the Freelancer model
        required: true
    },
    name: {
        type: String,
        required: true,
        // unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    gallery: [String], // Array of image or media URLs
    startingPrice: {
        type: Number,
        required: true,
        min: 0 // Ensure the price is non-negative
    },
    deliveryTime: {
        type: Number, // Delivery time in days
        required: true,
        min: 1
    },
    totalOrders: {
        type: Number,
        default: 0
    },
    tags: [String], // Optional tags to make services more searchable
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Compile the schema into a model
const Service = mongoose.model('Service', serviceSchema);
export default Service;
