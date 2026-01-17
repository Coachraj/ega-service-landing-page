import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.ts";
import leadRoutes from "./routes/leadRoutes.ts";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", leadRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});