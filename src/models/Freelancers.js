import mongoose from "mongoose";


// Define the Freelancer schema
const freelancerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true // Ensures one-to-one mapping with the User model
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    tagline: {
        type: String,
        // trim: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    responseTime: {
        type: String, // Can store in hours/days as a string, e.g., "24 hours"
        required: true
    },
    aboutMe: {
        type: String,
        trim: true
    },
    availabilityStatus: {
        type: String,
        enum: ['Available', 'Busy', 'Offline'], // Can expand based on needs
        default: 'Available'
    },
    workingHours: {
        type: Number, // Number of hours per week
        default: 0
    },
    openToNewProjects: {
        type: Boolean,
        default: true
    },
   
    openToMessages: {
        type: Boolean,
        default: true
    },
    hobbies: [String], // Array of strings
    skills: [String], // Array of strings
    topSpecialties: [String], // Array of strings
    interests: [String], // Array of strings
    languages: [
        {
            name: { type: String, required: true },
            level: { type: String, required: true } // e.g., "Fluent", "Beginner"
        }
    ],
    education: [
        {
            institution: { type: String, required: true },
            degree: { type: String, required: true },
            fieldOfStudy: { type: String },
            startYear: { type: Number },
            endYear: { type: Number }
        }
    ],
    certifications: [
        {
            name: { type: String, required: true },
            issuer: { type: String },
            year: { type: Number }
        }
    ]
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Compile the schema into a model
const Freelancer = mongoose.model('Freelancer', freelancerSchema);
export default Freelancer;

