const express = require("express");
const router = express.Router();

const { findNearestDriver } = require("../services/matchingService");

router.post("/request", (req, res) => {

    const { userLat, userLng } = req.body;

    const driver = findNearestDriver(userLat, userLng);

    if (!driver) {
        return res.json({
            message: "No drivers available"
        });
    }

    res.json({
        message: "Driver assigned",
        driver: driver
    });

});

module.exports = router;