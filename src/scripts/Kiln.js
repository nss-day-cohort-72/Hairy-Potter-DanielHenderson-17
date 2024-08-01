// 2. Define and export a function named firePottery that is responsible for acting as a kiln
// 3. that accepts two parameters with the first being an object that is a representation of a piece of pottery made at the wheel with the makePottery(). The second being the firing temperature
export const firePottery = (pottery, temperature) => {
    // 4. Add the fired property with the value of true
    pottery.fired = true;

    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        // 5. Add the cracked property with the value of false if temperature is less than or equal to 2200
        pottery.cracked = false;
    }

    // 6. Return the augmented pottery object
    return pottery;
};
