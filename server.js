import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import childRouter from "./routes/childRoute.js";
dotenv.config();

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

try {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  console.log(`MongoDB connected successfully : ${conn.connection.host}`);
} catch (error) {
  console.log(
    "MongoDB connect error occurred. Please check your MongoDB_URL is connected"
  );
  console.log(error);

  process.exit(1);
}

app.use("/api/child", childRouter);

app.listen(port, () =>
  console.log(`Server is running on port - ${port} successfully`)
);
