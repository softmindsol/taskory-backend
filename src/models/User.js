import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        trim: true, 
      },
      lastName: {
        type: String,
        required: [true, "Last Name is required"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        
      },
      password: {
        type: String,
        required: [true, "Password is required"],
       
        select: false, 
      },
      role: {
        type: String,
        enum: ['client', 'freelancer'], 
        required: true
    },
    accessToken: {
      type: String, 
    },
      agreedToTerms: {
        type: Boolean,
        required: [true, "Agreement to Terms of Service is required"],
        default: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});


const Users = mongoose.model("User",userSchema)
export default Users;
