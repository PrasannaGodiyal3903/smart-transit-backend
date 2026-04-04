const express = require("express");
const app = express();

app.use(express.json());

const driverRoutes = require("./routes/driverRoutes");
const rideRoutes = require("./routes/rideRoutes");

app.use("/driver", driverRoutes);
app.use("/ride", rideRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});