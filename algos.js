/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
  let results = [];
  let sum = nums[0];
  let left = 0;
  let right = 1
  while (right < nums.length) {
    if (Math.abs(sum) == Math.abs(targetSum)) {
      let temp = []
      for(let i= left;i<right;i++){
        temp.push(nums[i])
      }

      results.push(temp)
    }
    if (Math.abs(sum) <= Math.abs(targetSum)) {
      sum += nums[right];
      right++;
    }
    else if (Math.abs(sum) >= Math.abs(targetSum)) {
      sum -= nums[left];
      left++;
    }
  }
  return results;
}

const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];


// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];
const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];
console.log(findConsqSums(nums2, sum2));