const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Masai");
  console.log("Hello Masai");
});
const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

app.listen(process.env.port, async () => {
  console.log(`backend is runing at port ${process.env.port}`);
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    console.log("error getting to connect with data base");
  }
});
