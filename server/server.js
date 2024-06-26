<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001; // Ganti port ke 5001 atau port lainnya
=======
import express from "express";
import fs from "fs";
import cors from "cors";
// import records from "./routes/record.js";

// const express = require('express');
// const PORT = process.env.PORT || 5050;
// const { MongoClient} = require('mongodb');

import { MongoClient } from "mongodb";

const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'kitabantu';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function main() {
  try {
    // Menghubungkan ke MongoDB
    await client.connect();
    console.log('Koneksi berhasil');
    
    // Mengambil database
    const db = client.db(dbname);
    
    // Anda bisa mulai melakukan operasi pada database di sini
    
  } catch (error) {
    console.error('Koneksi gagal:', error);
  } finally {
    // Menutup koneksi
    await client.close();
  }
}

main().catch(console.error);



const app = express();
const app1 = fs;

// console.log(fs);
>>>>>>> 420aa718302d18518a96ddaf67aa3aa42ce782e8

// Middleware
app.use(cors());
app.use(express.json());
<<<<<<< HEAD

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mernstack', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
=======
// app.use("/record", records);

// start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


app.listen(5050, () => {console.log("Server started on port 5050")});

app.get("/laporanak", (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"] });
});

app.get('/', (req, res) => {
  res.send('mari bobo');
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

>>>>>>> 420aa718302d18518a96ddaf67aa3aa42ce782e8
