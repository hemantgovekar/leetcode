function twoSum(nums, target) {
    const mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (mp.has(compliment)) {
            return [mp.get(compliment), i]
        }
        mp.set(nums[i], i);
    }
}

let nums = [2, 17, 11, 7],
    target = 19;
console.log(twoSum(nums, target));

// const map = new Map(); // create a new Map to store seen numbers

// for (let i = 0; i < nums.length; i++) {
//   const complement = target - nums[i]; // calculate the complement

//   if (map.has(complement)) {
//     return [map.get(complement), i]; // return indices of the two numbers
//   }

//   map.set(nums[i], i); // store the current number and its index in the map
// }
