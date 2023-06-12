import * as dotenv from 'dotenv'
import config from './config'
dotenv.config()

import app from './server'


app.listen(config.port,()=>{
    console.log(`HELLO on http://localhost:${config.port}`)
})

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.method==="GET" && req.url==="/"){
//         console.log("Hello from server")
//         res.end()
//     }
// })

// server.listen(3001,()=>{
//     console.log("server running on http://localhost:3001")
// })