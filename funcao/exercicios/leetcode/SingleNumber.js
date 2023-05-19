var singleNumber = function (nums) {
  nums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] ^ nums[i]) {
      console.log(nums);
    }
  }
};

//const nums = [4, 1, 2, 1, 2];
//singleNumber(nums);

singleNumber = function (nums) {
  return nums.reduce((accumulator, value) => accumulator ^ value);
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
