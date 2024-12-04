// import mongoose from "mongoose";

// export const database = async () => {
// // MongoDB connection
// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('MongoDB connection error:', err));
// };


import mongoose from 'mongoose'
import { DB_NAME } from '../constants/constants.js'

export const database = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.warn(`\n Mongo Connected!! Host: ${connectionInstance.connection.host}`)
        return `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    } catch (error) {
        'MONGODB connection FAILED ', error

        process.exit(1)
    }
}

