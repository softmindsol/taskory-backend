import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer',
        required: true
    },
    projects: [
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            technologies: [String],
            link: { type: String }, 
            images: [String] 
        }
    ]
}, {
    timestamps: true
});



const Portfolio = mongoose.model("Portfolio",portfolioSchema)
export default Portfolio;
