let drivers = {};

function updateDriverLocation(driverId, lat, lng) {

    drivers[driverId] = {
        id: driverId,
        lat: lat,
        lng: lng,
        status: "available"
    };

}

function getDrivers() {
    return Object.values(drivers);
}

module.exports = {
    updateDriverLocation,
    getDrivers
};