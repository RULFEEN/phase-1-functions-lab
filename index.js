function distanceFromHqInBlocks(pickupStreet){
    if (pickupStreet > 42){
        return pickupStreet - 42
    }
    return 42 - pickupStreet
};

function distanceFromHqInFeet(pickupStreet){
    return distanceFromHqInBlocks(pickupStreet) * 264
};

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start) * 264
    }
    return (start - destination) * 264
};

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000){
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
};
