// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
function getMaxProfit(arr){
  //find lowest price
  //find highest price

  //return difference of highest and lowest
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  console.log(high - low)
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
