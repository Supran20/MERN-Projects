import express from "express";
import mongoose from "mongoose"; // Make sure to import mongoose
import Food from "./food.model.js";

const router = express.Router();

// * add food
router.post("/food/add", async (req, res) => {
  try {
    const foodItem = req.body;
    await Food.create(foodItem);
    return res.status(201).send({ message: "Food item is added successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error adding food item", error: error.message });
  }
});

// * get food list
router.get("/food/list", async (req, res) => {
  try {
    const foods = await Food.find();
    return res
      .status(200)
      .send({ message: "Food list fetched successfully", foods });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error fetching food list", error: error.message });
  }
});

// * delete food item by id
router.delete("/food/delete/:id", async (req, res) => {
  // Added async here
  try {
    // extract food item id from req.params
    const id = req.params.id;

    // check for mongo id validity
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    // if not valid mongo id, throw error
    if (!isValidId) {
      return res.status(400).send({ message: "Invalid mongo id" });
    }

    // find food using food item id
    const food = await Food.findOne({ _id: id });

    // if not food, throw error
    if (!food) {
      return res.status(404).send({ message: "Food item does not exist" });
    }

    // delete food item
    await Food.deleteOne({ _id: id });

    // send res
    return res.status(200).send({ message: "Food item deleted successfully" });
  } catch (error) {
    return res
      .status(200)
      .send({ message: "Error deleting food item", error: error.message });
  }
});

// * edit food item  by id
router.put("/food/edit/:id", (req, res) => {
  // extract food id from req.params
  // check for mongo id validity
  // if not valid mongo id, throw error
  // find food using food id
  // if not food found, throw error
  // extract new values from req.body
  // edit food item
  // send res
});

export default router;
