import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL as string;

export default (async () => {
	try {
		await mongoose.connect(MONGODB_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
})();
