const fs = require('fs')

setTimeout(() => console.log("Hello from the Timer"), 0);

setImmediate(() => console.log("Hello from the Immediately Fn 1"));


fs.readFile("./sample.txt", "utf-8", () => {
    console.log("IO polling Finished")
    
})

console.log("Hello from top Level coding ")