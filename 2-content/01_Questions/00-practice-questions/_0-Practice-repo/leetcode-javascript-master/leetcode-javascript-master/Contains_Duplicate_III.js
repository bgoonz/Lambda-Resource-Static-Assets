/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

const search = (pairs, t, k) => {
    let p1 = 0;
    
    while(p1 < pairs.length) {
        let p2 = p1 + 1;
        
        while(p2 < pairs.length) {
            if(Math.abs(pairs[p1][0] - pairs[p2][0]) <= t && Math.abs(pairs[p1][1] - pairs[p2][1]) <= k) {
                return true;
            } else {
                if(Math.abs(pairs[p1][0] - pairs[p2][0]) > t) {
                    break;
                } else {
                    p2++;   
                }
            }
        }
        
        p1++;
    }
    
    return false;
};

const containsNearbyAlmostDuplicate = (nums, k, t) => {
    if(k <= 0) {
        return false;
    }
    
    if(nums === null || nums.length === 0) {
        return false;
    }
    
    const pairs = [];
    
    for(let i = 0; i < nums.length; i++){
        pairs.push([nums[i], i]);
    }

    pairs.sort((a, b) => {return a[0] > b[0] ? 1 : -1;});

    return search(pairs, t, k);
};