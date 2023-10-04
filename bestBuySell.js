// let maxProfit = function(prices) {

//     let result = 0;
//     let lowIndex, highIndex, min, max;

//     for (let i = 0; i < prices.length; i++) {
//         let current = prices[i];
//         console.log(current)
//         if (min === undefined) {
//             min = current;
//             lowIndex = i;
//             continue;
//         }
        
//         max = current;
//         highIndex = i;

//         let profit = max - min;
//         console.log("profit " + profit)
//         console.log("min " + min)
//         console.log("max " + max)
//         if (max < min && profit < result) {
//             min = max;
//             lowIndex = i;
//             max = 0;
//             highIndex = 0;
//             continue;
//         }
        
//         if (profit <= result) {
//             continue;
//         } else {
//             result = profit;
//         }
//     }
//     return result;
// }


// let maxProfit = function(prices) {
//     if (prices.length === 0) {
//         return 0; // No profit can be made with an empty list of prices.
//     }

//     let result = 0;
//     let minPrice = prices[0];

//     for (let i = 1; i < prices.length; i++) {
//         let current = prices[i];
//         if (current < minPrice) {
//             minPrice = current;
//         } else {
//             let profit = current - minPrice;
//             if (profit > result) {
//                 result = profit;
//             }
//         }
//     }
    
//     return result;
// };

// let maxProfit = function(prices) {
//     let maxProfit = 0; // Initialize the maximum profit to 0
//     let minPrice = prices[0]; // Initialize the minimum price to the first element

//     for (let i = 1; i < prices.length; i++) {
//         let currentPrice = prices[i];
        
//         // Calculate the potential profit if we sell at the current price
//         let potentialProfit = currentPrice - minPrice;
        
//         // Update maxProfit if the potential profit is greater
//         if (potentialProfit > maxProfit) {
//             maxProfit = potentialProfit;
//         }
        
//         // Update the minimum price if we find a lower price
//         if (currentPrice < minPrice) {
//             minPrice = currentPrice;
//         }
//     }
    
//     return maxProfit;
// };

let maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4]
// const prices = [1, 2]

console.log(maxProfit(prices));