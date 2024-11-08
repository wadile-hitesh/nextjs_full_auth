import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI! || "");

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (err) => {
      console.log("err connecting to database", err);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
