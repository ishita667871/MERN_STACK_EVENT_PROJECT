import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
        console.log("MongoDB Connected Successfully for Event Planning Project");
    } catch (error) {
        console.error("MongoDB Connection Failed:', error.message");
        process.exit(1); // Exit if connection fails
    }
};

export default connectDB;
