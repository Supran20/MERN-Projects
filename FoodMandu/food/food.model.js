import mongoose from "mongoose";

// ? set rule/structure/schema

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// ? create table/model/collection

const Food = mongoose.model("Food", foodSchema);
export default Food;
