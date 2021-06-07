// Leetcode #217
// Language: Javascript
// Problem: https://leetcode.com/problems/contains-duplicate/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    if(nums === null){
        return false;
    }

    const map = {};

    for (const val of nums) {
        if(map[val]){
            return true;
        } else {
            map[val] = true;
        }
    }

    return false;
};