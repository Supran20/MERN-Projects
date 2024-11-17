import mongoose from "mongoose";

const dbURL = `mongodb+srv://Supran:supran123@cluster0.kqkdd5b.mongodb.net/Supran_Restuarant?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
    process.exit();
  }
};

export default connectDB;
