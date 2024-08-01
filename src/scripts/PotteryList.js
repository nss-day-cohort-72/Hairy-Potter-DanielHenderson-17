import { usePottery } from "./PotteryCatalog.js";


// 2. Define and export a PotteryList function.
export const PotteryList = () => {
    //3. The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
    const potteryToSell = usePottery();
    let potteryHTML = "";
    // 4. The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
    for (const potteryItem of potteryToSell) {
        potteryHTML += `
            <section class="pottery" id="pottery--${potteryItem.id}">
                <h2 class="pottery__shape">${potteryItem.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${potteryItem.weight} grams and is ${potteryItem.height} cm in height
                </div>
                <div class="pottery__price">Price is $${potteryItem.price}</div>
            </section>
        `
    }
    // 5. The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.
    return potteryHTML;
};
