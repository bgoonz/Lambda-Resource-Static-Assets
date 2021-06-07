/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {    
    const dp = [0];
    for(let i = 1; i <= amount; i++) {
        dp.push(-1);
    }
    

    for(let a = 0; a < amount; a++) {
        if(dp[a] < 0) {
            continue;
        }

        for (const coin of coins) {
            if((a + coin) > amount) {
                continue;
            }

            // if(dp[a + coin] < 0 || dp[a + coin] > dp[a] + 1) {
            if(dp[a + coin] < 0) {
                dp[a + coin] = dp[a] + 1;
            }
        }
    }
    console.log(dp)
    console.log(dp[amount])
    return dp[amount];
};

coinChange([1,2,5,10,25], 25);