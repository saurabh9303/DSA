let obj = {
    name : "saurabh"
}
const abc = function(a,b,c){
    console.log(this["name"],a,b,c)
}
abc.apply(obj, [1,2,3])