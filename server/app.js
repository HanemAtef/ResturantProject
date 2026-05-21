require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require("./routes/userRoutes");
const mealRoutes = require("./routes/mealRoutes");
const orderRoutes = require("./routes/orderRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");



app.use("/api/users", userRoutes);
app.use("/api", mealRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);

// Error middleware MUST be last
const errormiddleware = require("./middleware/errormiddleware");
app.use(errormiddleware);

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
}
dbConnection();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running 🤸🤸 ${port}`);
});
