// 2. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
const potteryToSell = [];

// 3. Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.
// 4. It must accept a pottery object as input.
export const toSellOrNotToSell = (pottery) => {
    // 7. If the piece of pottery is cracked, do not add a price property to it.
    if (!pottery.cracked) {
        // 5. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.
        if (pottery.weight >= 6) {
            pottery.price = 40;
        // 6. If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.
        } else {
            pottery.price = 20;
        }

        // 8. If the pottery is not cracked, add the object to the module-level array of items to be sold.
        potteryToSell.push(pottery);
    }

    // 9. Return the augmented object.
    return pottery;
};

// 10. Define and export a function named usePottery that returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.
export const usePottery = () => {
    const copiedPotteryToSell = Array.from(potteryToSell);
    return copiedPotteryToSell
};
