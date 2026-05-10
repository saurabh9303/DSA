function createProduct (name, price){
    let stock = 10;
    return {
        name, 
        price,
        by(qty){
            if (qty <=stock){
                stock -=qty;
                console.log(`booked - ${stock} pices left`)
            }
        } ,
        
        refill(qty){
            stock+=qty
            console.log(`refilled the stock - ${stock} price now`)
        },

        check(){
            console.log(stock)
        }
     }

}
let iphone = createProduct("iphone", 50000)
console.log(createProduct("kitkat", 10))
