// let obj = {
//     name : "saurabh"
// }
// const abc = function(a,b,c){
//     console.log(this["name"],a,b,c)
// }
// abc.apply(obj, [1,2,3])


function Factory (name, company, quantity, price){
    this.name = name ;
    this.company = company;
    this.quantity = quantity;
    this.price = price;
    
}

let Biskit1 = new Factory('ParleG', 'Parle', 5 , 10)
console.log(Biskit1)