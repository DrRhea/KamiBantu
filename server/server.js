import express from "express";
import cors from "cors";
// import records from "./routes/record.js";

// const express = require('express');
// const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/record", records);

// start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

app.get("/api", (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"] });
});


app.listen(5000, () => {console.log("Server started on port 5000")});