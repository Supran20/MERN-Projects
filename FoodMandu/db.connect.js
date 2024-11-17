import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://msupran17:supran123@supran.afauf7y.mongodb.net/foodmandu?retryWrites=true&w=majority&appName=Supran`
    );
    console.log("Connection established");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};
export default connectDB;
