import express from "express";
import { sendMessage } from "../messageController.js";

const express = require("express");
router.post('/', (req, res) => {
    res.send('Message Router Working!');
});

router.post("/send", sendMessage)

export default router;

