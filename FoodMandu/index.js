import express from "express";
import connectDB from "./db.connect.js";
import foodRoutes from "./food/food.controller.js";

const app = express();

// to make app understand json
app.use(express.json());
connectDB();
// network port and server
app.use(foodRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
