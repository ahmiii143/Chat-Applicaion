import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONDO_DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB is not connected", error.message);
  }
};
export default connectDB;
