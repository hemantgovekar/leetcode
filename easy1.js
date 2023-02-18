function twoSum(nums, target) {
    const mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (mp.has(compliment)) {
            return [mp.get(compliment), i]
        }
        mp.set(nums[i], i);
    }

    throw new Error("Match not found");


}

let nums = [2, 17, 11, 7],
    target = 19;
console.log(twoSum(nums, target));

