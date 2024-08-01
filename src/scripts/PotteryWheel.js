// 2. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
let potteryId = 1;

// 3. Define and export a function named makePottery.
// 4. The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };

    // Increment the primary key for the next piece of pottery
    potteryId++;

    // 5. The makePottery function must return an object with the following properties on it
    return pottery;
};
