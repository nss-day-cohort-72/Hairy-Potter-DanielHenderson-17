import { usePottery } from './PotteryCatalog.js';

//2. Define and export a PotteryList function.
export const PotteryList = () => {
    //3. The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
    const potteryForSale = usePottery();
    //4. The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
    const potteryHTML = potteryForSale.map(pottery => {
        return `
            <section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
            </section>
        `;
    }).join("");
    
    //5. The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.
    return potteryHTML;
};
