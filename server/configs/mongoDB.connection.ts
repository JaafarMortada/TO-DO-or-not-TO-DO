import mongoose from 'mongoose';
import { envConfig } from './env.config.ts';

export default async () => {
    mongoose.Promise = global.Promise;
    const options:{
        family: number
    } = {
        family: 4
    }
    
    try {
      await mongoose.connect(envConfig.MONGO_URL, options);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  
    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
  };