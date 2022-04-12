function trafficLights(road, n) {
    let res = [road];

    //saves the position of the lights and the cars
    let state = { light: [], car: [] };

    //sets the light cicle
    let lights = "GGGGGORRRRR";

    for (let i = 0; i < road.length; i++) {
        if (road[i] == "C") {
            //unshift adds one or more elements to the beginning of an array and returns the new length of the array
            //registers the position and number of the cars in the current road in order
            state["car"].unshift(i);

        } else if (lights.includes(road[i])) {
            //registers the position of the lights in the road and in the light cicle
            state["light"].push([i, lights.indexOf(road[i])]);

        }
    }

    for (let i = 0; i < n; i++) {
        //repeat returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
        //transforms the current road string in an array of strings
        let cur = ".".repeat(road.length).split("");

        //changes the lights following the light cicle
        state.light = state.light.map((sign) => [
            sign[0],
            (sign[1] + 1) % lights.length
        ]);

        //iterates on the number of cars in the road
        for (let j = 0; j < state.light.length; j++) {
            cur[state.light[j][0]] = lights[state.light[j][1]];
        }

        //iterates on the number of cars in the road
        for (let j = 0; j < state.car.length; j++) {

            //continue terminates the execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration
            //checks if there is a car in the final position of the road
            if (state.car[j] == road.length - 1) continue;
            //moves the car forward if the next position is road or green light without a car
            if (
                cur[state.car[j] + 1] == "." ||
                (cur[state.car[j] + 1] == "G" && cur[state.car[j] + 2] !== "C")
            ) {
                cur[state.car[j] + 1] = "C";
                state.car[j]++;
            } else {
                cur[state.car[j]] = "C";
            }
        }

        //builds the final array at the end of the loop
        res.push(cur.join(""));
    }
    return res;
}