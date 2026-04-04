function calculateDistance(lat1, lng1, lat2, lng2) {

    const dx = lat2 - lat1;
    const dy = lng2 - lng1;

    return Math.sqrt(dx * dx + dy * dy);
}

module.exports = calculateDistance;

//calculates distance between user and driver