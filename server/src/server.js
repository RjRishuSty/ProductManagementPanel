require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;
const productRoutes = require("./routes/product.routes");
const connectDB = require("./config/db");

app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173"],
  credentials: true,
}))

app.use("/api/v1/products", productRoutes);

//* Test Check Api is working or not.......
app.get("/test", (req, res) => {
  res.json({ message: "👍 Server running perfectly" });
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();