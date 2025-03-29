
import { Message } from "../models/messageSchema.js"; // Import only once

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are present
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Create and save the message
    await Message.create({ name, email, subject, message });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = Object.values(error.errors)
        .map((err) => err.message)
        .join(" ");
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unknown Error",
    });
  }
};
