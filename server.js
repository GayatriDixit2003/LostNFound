const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");


//mongodb connection
connectDB();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);


const PORT = process.env.PORT || 5000;

// Start the server on a different port (e.g., 5000 or 6000)
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
