//******************  Binary search Iterative approach ****************//  
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// let sortedData = data.sort((a, b) => a - b);
// console.log(sortedData)
// let target = 13;
// let start = 0;
// let end = data.length - 1;
// let targetPosition = undefined;
// while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (sortedData[mid] === target) {
//         targetPosition = mid;
//         break;
//     } else if (sortedData[mid] < target) {
//         start = mid + 1
//     } else {
//         end = mid - 1
//     }
// }
// console.log(targetPosition)
// data.sort((a, b) => {
//     console.log(`a = ${a}, b = ${b}, return = ${a - b}`);
//     return a - b;
// });

// console.log(data);



//******************  Binary search Recursive approach ****************//
function binarySearch(target, start = 0, end = data.length - 1) {
    if (start > end) {
        return `status -1 response Not Found`;
    }
    let mid = Math.floor((start + end) / 2)
    // console.log(`start => ${start}, end => ${end}, mid => ${mid}`)
    if (target === data[mid]) {
        // console.log(`Target index is => ${mid}\nTarget value is => ${data[mid]}`)
        return data[mid];
    }
    if (target < data[mid]) {
        return binarySearch(target, start, end = mid - 1)
    }
    return binarySearch(target, start = mid + 1, end)

}

console.log(binarySearch(111));

