const { getDrivers } = require("./driverStore");
const calculateDistance = require("../utils/distance");

function findNearestDriver(userLat, userLng) {

    const drivers = getDrivers();

    let nearestDriver = null;
    let minDistance = Infinity;

    drivers.forEach(driver => {

        if (driver.status !== "available") return;

        const distance = calculateDistance(
            userLat,
            userLng,
            driver.lat,
            driver.lng
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearestDriver = driver;
        }

    });

    return nearestDriver;
}

module.exports = { findNearestDriver };