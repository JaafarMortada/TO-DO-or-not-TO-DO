import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig: {
  PORT: number;
  MONGO_URL: string;
  JWT_SECRET: string
} = {
  PORT: Number(process.env.PORT),
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  
};

