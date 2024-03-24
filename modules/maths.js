// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// // module.exports = add;
// // module.exports = sub; 

// Second way to export the file with object 
module.exports = {
    add,
    sub
}

// Anonymous function is also one way
exports.add = (a, b) => a + b

exports.sub = (a, b) => a - b