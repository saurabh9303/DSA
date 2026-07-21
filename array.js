// var twoSum = function(nums, target) {
//     for ( let i = 0; i<nums.length-1; i++){
//         for(let j = i+1; j<nums.length; j++ ){
//             if (nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// };
// let nums = [3,3];
// let target = 6;
// console.log(twoSum(nums, target))


// Remove duplicates from an array by using single loop

let arr1 = [2,1,2,3,6,7,4,5,3,2,1,1,3,2,5,6,7,8,9,7,8,9,5,3,4,5,6]
let arr2 = [6,7,4,5,3,2,1,1,3,2,5,6,7,8,9,7,8,9,5,3,4,5,6]
let data = new Set()
data.add = arr1
data.add = arr2
console.log(data)