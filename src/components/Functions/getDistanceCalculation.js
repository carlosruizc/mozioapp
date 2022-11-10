

import haversine from "haversine-distance";

export const getDistanceCalculation = (cities) => {

    const isDijon = cities.find(element => element[0] === "Dijon");
    if (isDijon) {
        throw 'There is Dijon in the search';
    }


    let distanceMatrix = [[]];
    let origin = [];
    let destination = [];
    for (let i = 0; i < cities.length; i++) {
        origin = [cities[i][2], cities[i][1]];
        distanceMatrix[i] = [];
        for (let j = 0; j < cities.length; j++) {
            destination = [cities[j][2], cities[j][1]];
            if (i !== j) {
                distanceMatrix[i][j] = haversine(origin, destination) / 1000;
            } else {
                distanceMatrix[i][j] = 1000000;
            }
        }
    }

    let finalCity = cities[cities.length - 1];
    let finalDistance = distanceMatrix.splice(-1);
    distanceMatrix.forEach((distance) => {
        distance.splice(cities.length - 1, 1, 1000000);
    });


    let minDistance = 0;
    let index = 0;
    let visit = { "index": 0, "originCity": cities[0], "distance": 0 };
    let visitOrder = [visit];
    minDistance = Math.min.apply(Math, distanceMatrix[visit.index]);
    index = distanceMatrix[visit.index].indexOf(minDistance);
    visit = { "index": index, "originCity": cities[index], "distance": minDistance };
    visitOrder.push(visit);
    distanceMatrix.forEach((distance) => {
        distance.splice(0, 1, 1000000);
    });
    distanceMatrix.forEach((distance) => {
        distance.splice(index, 1, 1000000);
    });
    for (let i = 0; i < cities.length - 3; i++) {
        minDistance = Math.min.apply(Math, distanceMatrix[visit.index]);

        index = distanceMatrix[visit.index].indexOf(minDistance);
        visit = { "index": index, "originCity": cities[index], "distance": minDistance };
        visitOrder.push(visit);
        distanceMatrix.forEach((distance) => {
            distance.splice(index, 1, 1000000);
        });
    }

    visit = { "index": distanceMatrix.length, "originCity": finalCity, "distance": finalDistance[0][index] };
    visitOrder.push(visit);

    for (let i = 0; i < distanceMatrix.length; i++) {
        visitOrder[i].destinationCity = visitOrder[i + 1].originCity;
        visitOrder[i].distance = visitOrder[i + 1].distance;

    }

    visitOrder.pop();



    return (
        visitOrder
    );
};




