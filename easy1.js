//map and with function
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        compliment = target - nums[i]

        if (map.has(compliment))
            return [map.get(compliment), i];

        map.set(nums[i], i)
    }

    throw new Error("Match not found");
}

let nums = [2, 1, 11, 17],
    target = 19;

console.log(twoSum(nums, target));

