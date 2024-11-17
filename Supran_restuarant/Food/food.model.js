import mongoose from "mongoose";

// set schema/structure

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  servingSize: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 1000,
  },
});

// create table/model
const Food = mongoose.model("Food", foodSchema);

export default Food;
