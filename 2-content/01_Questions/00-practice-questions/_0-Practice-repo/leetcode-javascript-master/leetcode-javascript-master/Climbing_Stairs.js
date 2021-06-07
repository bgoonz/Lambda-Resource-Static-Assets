// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    let n1 = 1;
    let n2 = 1;
    

    // n1 and n2 stands for how many ways it can reach n taking one step or two steps, such as n - 1 and n - 2
    for(let i = 2; i <= n; i++) {
        const ways = n1 + n2;
        n1 = n2;
        n2 = ways;
    }


    
    return n2;
};