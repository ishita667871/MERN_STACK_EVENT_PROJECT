 
import express from "express";
import connectDB from "./database/dbconnection.js";
import dotenv from "dotenv"
import eventRoutes from "./routes/eventRoutes.js";
//const express = require("express");
//const mongoose = require("mongoose");
const app = express();
app.use(express.json()); // ✅ Important for parsing JSON requests
app.use(cors());

// Middleware to parse JSON request body


app.get('/api/v1/message/send', (req, res) => {
    res.json({ success: true, message: "Message sent successfully!" });
});

app.post('/api/v1/message/send', (req, res) => {
    res.json({ success: true, message: "POST request received!", data: req.body });
});

//console.log('Connected to database:');

//res.json({message:"Data received successfully",receivedData: data });
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

connectDB();