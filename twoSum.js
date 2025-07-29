/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let i2 = i + 1; i2 < nums.length; i2++) {
            if (nums[i] + nums[i2] == target) {
                indices.push(i, i2)
                return indices;
            }
        }
    }

    return indices;
};

twoSum = function(nums, target) {
    debugger;
    const compliments = new Map(); // stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (compliments.has(complement)) {
            return [compliments.get(complement), i];
        }
        compliments.set(nums[i], i);
    }
    return [];
};

const target = 6;
const nums = [5,1];
const targetConstituents = twoSum(nums, target);
console.log(`the values for indices ${targetConstituents[0]} and ${targetConstituents[1]} add up to ${target}`);