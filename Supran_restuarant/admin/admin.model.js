import mongoose from "mongoose";

// set schema/structure/rule
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxlength: 60,
    unique: true, //index
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
});
// create table/model/collection
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
