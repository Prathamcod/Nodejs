const fs = require('fs')
const crypto = require('crypto');

const start = Date.now()

process.env.UV_THREADPOOL_SIZE = 10

setTimeout(() => console.log("Hello from the Timer"), 0);

setImmediate(() => console.log("Hello from the Immediately Fn 1"));


fs.readFile("./sample.txt", "utf-8", () => {
    setImmediate(() => console.log('Hello from Immediate Fn 2'));

    // CPU Intensive Work 
    crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 1 Done')
    })
    crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 2 Done')
    })
    crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 3 Done')
    })
    crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 4 Done')
    })

    crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 5 Done')
    })
    crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 6 Done')
    })
    crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 7 Done')
    })
})

console.log("Hello from top Level coding ")