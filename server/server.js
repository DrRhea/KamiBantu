import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MongoClient } from "mongodb";
import fs from "fs";

const app = express();
const port = process.env.PORT || 5050;

// MongoDB Connection
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'kamibantu';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function main() {
  try {
    await client.connect();
    console.log('MongoDB connected');

    // Optionally, you can perform operations on the database here

  } catch (error) {
    console.error('MongoDB connection failed:', error);
  } finally {
    // Closing the MongoDB connection
    // await client.close(); // Typically, you don't close the client immediately if your app is running
  }
}

main().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// Express Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/laporanak', (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"] });
});

app.get('/lapordewasa', (req, res) => {
  res.send('mari makan');
});

app.get('/home', (req, res) => {
  res.send('mari mandi');
});

app.get('/riwayat', (req, res) => {
  res.send('mari solat');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
