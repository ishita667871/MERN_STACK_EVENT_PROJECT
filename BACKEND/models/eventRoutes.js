import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import { sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/message", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save(); // Save the message to MongoDB

        res.status(201).json({ success: true, message: "Message received successfully!", data: newMessage });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
