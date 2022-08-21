const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const financeRoutes = require("./routes/financesRoutes");

// ROUTES
app.use("/", financeRoutes);

module.exports = app;
