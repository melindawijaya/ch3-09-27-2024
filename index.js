const fs = require("fs").promises;
const fsSync = require("fs");


// 1. Membaca file surat fsw 2
let letter = fs.readFileSync("./index.txt", "utf-8")

// 2. Proses print isi dari surat
console.log(`ini baris  7: ${letter}`)

// 3. Membuat file baru untuk membaca surat
const feedback = "Hello!"
fs.writeFileSync("./balasan.txt", feedback)
// console.log(writeResult)

// menimpa isi konten dari index.txt
fsSync.writeFileSync("./index.txt", "ketimpa ngga suratnya part 2?")

async function readLetter() {
    try {
        const readLetter = await fs.readFile('./index.txt', "utf-8") 
        console.log(`ini surat cinta ${bacaSuratCinta}`)
    } catch (error) {
        console.log(error)
    }
}

letter = fs.readFile("./index.txt", "utf-8", (err, data) => {
    console.log(`ini baris 17: ${data}`)
})


console.log(`ini baris 20: ${letter}`)