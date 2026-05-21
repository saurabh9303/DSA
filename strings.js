// Reverse a string
// let string = prompt("Enter a string")
// if(!isNaN(string)){
//     console.log("You entered a number, Please enter string")
// }else{
//     var reversed = ""
//     for(let i = string.length-1; i>=0; i--){
//         reversed = reversed + string[i]
//     }
// }
// console.log(reversed)

// var checkIfPangram = function(sentence) {
//     let arr = sentence.split("").reverse().join("")
//     if (arr === sentence){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
// };

// checkIfPangram("mam")

// let set = new Set()
// set.add(5)
// set.add(5)
// set.add(4)
// console.log(set)


let frequencyOfCharacter = function (s){
    let obj = {};
    for (const char of s) {
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char] = 1
        }
    }
    return obj;
}
console.log(frequencyOfCharacter("saurabh"))
