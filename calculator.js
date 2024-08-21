const os = require('os')

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus())
console.log(os.totalmem());





function mul(a , b){
    console.log(a*b);
}
function add(a , b){
    console.log(a+b);
}
function sub(a , b){
    console.log(a-b);
}
function div(a , b){
    console.log(a/b);
}

module.exports={
    multiply : mul,
    addition : add,
    substract : sub,
    division : div
}