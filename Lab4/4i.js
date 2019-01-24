function amountTocoins(money, coins) {
    var total = [];
    for (let i = 0; i < coins.length; i++) {
        while (true) {
            if(money - coins[i] >= 0) {
                money -= coins[i];
                total.push(coins[i]);
            } else {
                break;
            }
        }
    }
    console.log(total);
}
  
amountTocoins(46,[25,10,5,2,1]);