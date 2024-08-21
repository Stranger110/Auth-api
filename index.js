const age = 24;

const cart = 
[
{
    product: "xyz shirt",
    size: "xl",
    uid: "sdgjwhb37u3q19821",
    order: "20-10-2022",
    contact: "9198989119",
    Fullfilled: true
},
{
    product: "xyz shirt",
    size: "xzl",
    uid: "sdgjwhb37u3q19821",
    order: "26-01-2023",
    contact: "9198989119",
    Fullfilled: false
}]

console.log(cart);
const add = function(a, b){
    return a+b;
}

module.exports = {
    age,
    add
}