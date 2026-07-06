//************* Selection sort by ascending order *****************//
// let data = [3,4,2,5,8,9];
// let minValue;
// for (let i = 0; i < data.length; i++) {
//     minValue = i;
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[j] < data[minValue]) {
//             minValue = j;
//         }
//     }
//     let temp = data[minValue]
//     data[minValue] = data[i]
//     data[i] = temp;
// }
// console.log(data)



//************* Selection sort by descending order *****************//
// let arr = [3,4,2,5,8,9];
// let maxValue;
// for (let i = 0; i < arr.length; i++) {
//     maxValue = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[maxValue]) {
//             maxValue = j;
//         }
//     }
//     let temp = arr[maxValue]
//     arr[maxValue] = arr[i]
//     arr[i] = temp;
// }
// console.log(arr)




// ************* Insertion sort ********************
let array = [113, 412, 212, 523, 832, 119];
let current;
let j;
for (let i = 1; i <= array.length - 1; i++) {
    let current = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j]
        j--
    }
    console.log(`${j} => ${array[j]}`)
    array[j + 1] = current
}

console.log(`final array => ${array}`)
