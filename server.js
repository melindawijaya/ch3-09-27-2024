const http = require("http")
const url = require("url") // memanggi modul
const fs = require("fs")
const fsAsync = require("fs").promises

const fileUtama = fs.readFileAsync("./index", "utf-8")

// express = framework third party untuk memudahkan HTTP
const server = http.createServer((req,res) => {
    console.log(req.url)
    const pathUrl = req.url

    // Defaullt selalu ada :
    // localhost:3000/ = health check, apakah aplikasinya jalan
    // 404 = handle jika url tidak ada

    if(pathUrl === "/budi"){
        res.end("INI TUGAS YANG BUDI")
    }
    else if (pathUrl === "/"){
        res.end("Hello, Welcome To Team 7!")
    }
    else {
        res.end("Ini gak ada! Status code : 404 ")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('This aplication is running in port:3000')
})

async function rewriteFromMelinda(filepath, content) {
    try {
        const rewriteContent = await fsAsync.readFile(filepath, content) 
        console.log("sukses nulis ulang file")
    } catch (error) {
        console.log(error)
    }
}
