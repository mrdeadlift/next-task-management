import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '');
        // console.log("Connected to database");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to connect to database");
    }
}