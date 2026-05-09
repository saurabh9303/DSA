// let obj = {
//     name : "saurabh"
// }
// const abc = function(a,b,c){
//     console.log(this["name"],a,b,c)
// }
// abc.apply(obj, [1,2,3])




function Constructor(name, company, color, quantity, price) {
    this.name = name;
    this.company = company;
    this.quantity = quantity;
    this.price = price;
    this.color = color

}

Constructor.prototype.write = function (text) {
    let h1 = document.createElement("h1")
    h1.textContent = text
    h1.style.color = this.color
    document.body.append(h1)
}

let pen1 = new Constructor('celloPen', 'cello', "green", 5, 10)
let pen2 = new Constructor('alcosebetter', 'cello', "red", 5, 10)
// console.log(pen1)