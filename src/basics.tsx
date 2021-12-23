// Typed strings, typed arrays, typed objects, interfaces, records, booleans, null values

let restaurant: string = "McDonalds";

let bank: string = "Wells Fargo";

let Ordered: boolean = false;

let isEmpty: null = null;

const orderedItems: Array<string> = ["Double Cheeseburger", "Apple Pies", "French Fries"];

const foodPrices: Array<number> = [3, 2];

const foodRecord: Record<number, string> = {
    10: "Cheeseburger",
    20: "French Fries"
};

     foodRecord[30] = "Hamburger";