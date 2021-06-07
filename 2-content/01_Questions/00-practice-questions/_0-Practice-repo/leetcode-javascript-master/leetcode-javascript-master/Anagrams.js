/**
 * @param {string[]} strs
 * @return {string[]}
 */
const anagrams = strs => {
    let result = [];
    const hash = {};
    const keyList = {};
    
    for(var i = 0; i < strs.length; i++){
        const str = strs[i];
        const key = getKey(str);
        
        if(hash[key]){
            keyList[key] = true;
        } else {
            hash[key] = [];
        }
        
        hash[key].push(str);
    }
    
    for(i in keyList){
        result = result.concat(hash[i]);
    }
    
    return result;
};

var getKey = str => {
    const key = "";
    const arr = [];
    for(let i = 0; i < str.length; i++){
        const val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[val] = arr[val] || 0;
        arr[val]++;
    }
    
    return arr.join('_');
}