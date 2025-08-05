import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;
import authRoutes from "../src/routes/auth.route.js";
import { connectDB } from "./lib/db.js";

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
