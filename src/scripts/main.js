// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from './Kiln.js';



// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 1, 3);
let plate = makePottery('Plate', 5, 7);
let bowl = makePottery('Bowl', 2, 4);
let vase = makePottery('Vase', 3, 10);
let cup = makePottery('Cup', 1, 2);
// console.log(mug);
// console.log(plate);
// console.log(bowl);
// console.log(vase);
// console.log(cup);


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000);
const firedPlate = firePottery(plate, 2100);
const firedBowl = firePottery(bowl, 2300); //Intentionally too high per instructions
const firedVase = firePottery(vase, 2200);
const firedCup = firePottery(cup, 2500); //Intentionally too high per instructions
// console.log(firedPottery1);
// console.log(firedPottery2);
// console.log(firedPottery3);
// console.log(firedPottery4);
// console.log(firedPottery5);


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

