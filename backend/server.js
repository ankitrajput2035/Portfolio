import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import profileRoutes from './routes/profileRoutes.js';


dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// Use CORS - configure for your frontend URL in production
app.use(cors({
    // origin: "https://portfolio-xa3p.onrender.com",
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  }));

app.use(express.json());






// API Routes
app.use('/api/', profileRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});




app.listen(PORT, "0.0.0.0",() => console.log(`Server running on port ${PORT}`));