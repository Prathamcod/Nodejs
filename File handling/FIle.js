// const fs = require("fs");

// First write in a File
// Sync
// fs.writeFileSync("./test.txt" ,"Hello from developer");

// Async
// fs.writeFile("./test.txt", "Hello from Devleoper", (err) => {

// })

// Read the File
// Sync
// const result = fs.readFileSync("./read.txt", "utf-8")
// console.log(result);

// Async
// fs.readFile("./read.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log(result);
//     }
// });

// Sync 

// fs.appendFileSync("./test.txt", 'Hello From Node js\n')

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt").isFile());

const fs = require("fs")

// Asynchronous way to write to files
const content1 = "Long text here"
const content2 = "Small text here"
const content3 = "Testing here"

//Write multiple files asynchronously
fs.writeFile("content1.txt", content1, (err) => {
    console.log({ "errorcode": "0000", "message": "Error during write 1" });
})

fs.writeFile("content2.txt", content2, (err) => {
    console.log({ "errorcode": "0001", "message": "Error during write 2" });
})

fs.writeFile("content3.txt", content3, (err) => {
    console.log({ "errorcode": "0002", "message": "Error during write 3" });
})
 