import mongoose from "mongoose";

const DB_STRING = process.env.MONGO_URI || "";

const options = {
  maxPoolSize: 10, // Maximum number of connections in the pool
  minPoolSize: 5, // Minimum number of connections in the pool
  maxIdleTimeMS: 30000, // Max time a connection can remain idle before being closed
  socketTimeoutMS: 45000, // Timeout for socket inactivity
  connectTimeoutMS: 30000, // Timeout for initial connection
};

const connectDB = async () => {
  try {
    await mongoose.connect(DB_STRING, options);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    if (
      error.name === "MongoNetworkError" &&
      error.message.includes("ETIMEDOU")
    ) {
      console.error("Connection timed out: Please check your network status.");
    } else if (
      error.name === "MongoNetworkError" &&
      error.message.includes("ETIMEDOUT")
    ) {
      throw new Error("Server timed out");
    } else {
      console.error("❌ MongoDB Connection Failed", (err as Error).message);
    }
    process.exit(1);
  }
};

export default connectDB;
