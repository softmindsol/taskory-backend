import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { database } from './src/config/db.js';
import { app } from './app.js';
import { PORT } from './src/config/env.config.js';

dotenv.config();
// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT || 9000;
// console.log("🚀 ~ PORT:", PORT)
database();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
