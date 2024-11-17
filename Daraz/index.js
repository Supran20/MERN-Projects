import express from "express";

// app
const app = express();

// to make app understand json
app.use(express.json());

// ? Item List
const Daraz = [
  {
    id: 1,
    item_name: "Fan",
    price: "Rs2200",
  },
  {
    id: 2,
    item_name: "Laptop",
    price: "Rs89000",
  },
];
//get a item
app.get("/item/list", (req, res) => {
  console.log(typeof res);
  return res.status(200).send({ message: "success", items: Daraz });
});

// add a item
app.post("/item/add", (req, res) => {
  const newItem = req.body;

  Daraz.push(newItem);
  return res.status(200).send("added successfully");
});
// network port and server
const PORT = 8090;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
