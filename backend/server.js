import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import profileRoutes from './routes/profileRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Use CORS - configure for your frontend URL in production
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  }));

app.use(express.json());

// API Routes
app.use('/', profileRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));