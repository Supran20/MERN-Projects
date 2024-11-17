import express from "express";
import connectDB from "./connect.db.js";
import adminRoutes from "./admin/admin.controller.js";
import foodRoutes from "./Food/food.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// datatbase connection
connectDB();

// register routes
app.use(adminRoutes);
app.use(foodRoutes);

//network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
