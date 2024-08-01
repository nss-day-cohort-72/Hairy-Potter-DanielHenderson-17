//Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
let potteryId = 1;

//Define and export a function named makePottery.
export function makePottery(shape, weight, height) {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };
    //incremented each time the function is invoked
    potteryId++;

    //makePottery() returns an object with properties shape, weight, height, and id. id is incremented each time the function is invoked
    return pottery;
}