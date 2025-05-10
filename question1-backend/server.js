require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stockRoutes = require("./routes/stockRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/stocks", stockRoutes);
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Backend server is running ');
  });  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
