// Leetcode #165
// Language: Javascript
// Problem: https://leetcode.com/problems/compare-version-numbers/
// Author: Chihung Yu
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 
const comparator = (v1, v2) => {
    
};
 
const compareVersion = (version1, version2) => {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    
    let index = 0;
    const len = Math.max(arr1.length, arr2.length);
    
    while(index < len){
        const v1 = parseInt(arr1[index]);
        const v2 = parseInt(arr2[index]);
        
        if(isNaN(v1) && v2 !== 0){
            return -1;
        }
        
        if(isNaN(v2) && v1 !== 0){
            return 1;
        }
        
        if(v1 > v2){
            return 1;
        } else if(v1 < v2){
            return -1;
        }
        
        index++;
    }
    
    return 0;
};