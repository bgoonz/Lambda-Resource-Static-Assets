/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const verticalOrder = root => {
    const res = [];
    
    if(root === null) {
        return res;
    }
    
    const hash = {};
    const queue = [];
    queue.push([root, 0]);
    let min = Infinity;
    let max = -Infinity;
    
    while(queue.length) {
        const len = queue.length;
        
        for(let i = 0; i < len; i++) {
            const pair = queue.shift();
            const node = pair[0];
            const order = pair[1];
            
            hash[order] = hash[order] || [];
            hash[order].push(node.val);
            
            min = Math.min(order, min);
            max = Math.max(order, max);
            
            if(node.left) {
                queue.push([node.left, order - 1]);
            }
            
            if(node.right) {
                queue.push([node.right, order + 1]);
            }
        }
    }
    
    while(min <= max) {
        if(hash[min].length) {
            res.push(hash[min]);
        }
        min++;
    }
    
    return res;
};