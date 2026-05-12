// let set = new Set();
// set.add(19)
// set.add(23)
// set.add(43)
// set.add(22)
// set.add(12)
// set.add(56)
// console.log(set)
// set.delete(22)
// console.log(set)
// console.log(set.size)
// console.log(set.has(56))
// for(let a of set){
//     console.log(a)
// }

// let arr = [10 , 45, 18, 9, 9, 10, 45, 10, 10]

// let set = new Set()

// arr.forEach(element => {
//     if(set.has(element)){
//         set.delete(element)
//     }else{
//         set.add(element)
//     }
        
// });

// console.log(set)

// let map = new Map()

// map.set("name","saurabh")
// map.set("age", 22)
// map.set("isPassed",true)
// map.set("contact",[9303088893])
// // console.log(map)

// for(let [key, value] of map){
//     console.log(`${key} --> ${value}`)
// }

// for(let key of map.values()){
//     console.log(key)
// }


let arr = [1,3,2,1,3,4,5,4,5,6,7,5]
let map = new Map()
arr.forEach(element => {
    if(map.has(element)){
        map.set(element, map.get(element) + 1)
    }else{
        map.set(element, 1)
    }
});

console.log(map)