//node framework
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

//to properly use the .env
dotenv.config();
const PORT = process.env.PORT || 5001;

//Express application instance, web server object for routes & middleware
const app = express();

//middleware
// app.use(...) Tells Express: “Run this function for every incoming request,
// no matter the path or method (GET, POST, etc.).”
// express.json It’s like a translator at the door —
// it takes the JSON from the request body, turns it into a JS object,
// and hands it to your route handler so you can use it directly.
app.use(express.json());
app.use(rateLimiter);
//express middleware function
//next tells express:
// "im done with this middleware - move on to the next matching route or middleware"
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

//run database
connectDB().then(() => {
  //tells app to start accepting connections
  app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
  });
});

