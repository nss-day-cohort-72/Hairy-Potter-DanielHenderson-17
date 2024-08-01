// Define and export a function named firePottery that is responsible for acting as a kiln that accepts two parameters with the first being an object that is a representation of a piece of pottery made at the wheel with the makePottery(). The second being the firing temperature
export function firePottery(pottery, temperature) {
    // Add the fired property with the value of true
    pottery.fired = true;

    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        //
        pottery.cracked = false;
    }

    // Return the augmented pottery object
    return pottery;
}