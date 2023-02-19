let nums = [2, 17, 11, 7];


const hashObj = {}


for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    hashObj[i] = element
}

console.log(hashObj.has(17));