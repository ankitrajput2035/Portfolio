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


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app's 'dist' folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // The "catchall" handler for any request that doesn't match an API route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// API Routes
app.use('/', profileRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));