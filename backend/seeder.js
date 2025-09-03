import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Profile from './models/profileModel.js';
import { profileData } from './data/seedData.js'; 

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await Profile.deleteMany(); // Clear existing profiles
    await Profile.create(profileData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();