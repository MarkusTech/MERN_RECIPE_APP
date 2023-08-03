import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import colors from "colors";

// IMPORTS
import connectDB from "./database/db.js";

// ROUTES
import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

// DOTENV CONFIG
dotenv.config();
const port = process.env.PORT;

// REST OBJ
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// database
connectDB();

/** HTTP GET REQUEST */
app.get("/", (req, res) => {
  res.send("Server is now Running");
});

/** USE METHOD ROUTES */
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", recipeRoutes);

// EVENT LISTENER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
