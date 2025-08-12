//node framework
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

//to properly use the .env
dotenv.config();
const PORT = process.env.PORT || 5001
//Express application instance, web server object for routes & middleware
const app = express();

app.use("/api/notes", notesRoutes);

connectDB()

//tells app to start accepting connections
app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});

