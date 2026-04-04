const express = require("express");
const { updateDriverLocation, getDrivers } = require("../services/driverStore");
const router = express.Router();

router.post("/location", (req, res) => {

    const { driverId, lat, lng } = req.body;
    updateDriverLocation(driverId, lat, lng);
    res.json({
        message: "Driver location stored"
    });

});

router.get("/all", (req, res) => {

    const drivers = getDrivers();

    res.json(drivers);

});

module.exports = router;