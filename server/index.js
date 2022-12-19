import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";

const app = express();

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to my app",
  });
});

const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    console.log("Connecting to database...", process.env.MONGODB_URI);
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();

export default app;
