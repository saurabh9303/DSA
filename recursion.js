// function greet (){
//     console.log("good morning")
//     enjoy()
// }

// function enjoy(){
//     console.log("enjoying")
//     temp()
// }

// function temp (){
//     console.log("hello")
// }

// greet()

//################## Recursion -->> 

// function temp(n){
//     if (n===0) return;
//     console.log("hello world")
//     temp(n-1)
// }
// temp(5)

function temp(n){
    if (n===0) return;
    console.log(n)
    temp(n-1)
}
temp(100)

