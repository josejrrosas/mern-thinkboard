//node framework
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

//Express application instance, web server object for routes & middleware
const app = express();

app.use("/api/notes", notesRoutes);

//tells app to start accepting connections
app.listen(5001, () => {
  console.log("Server started on port 5001.");
});
