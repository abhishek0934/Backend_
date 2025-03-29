// const express = require('express')

// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World! sunno ji')
// })

// app.get('/twitter', (req, res) => {
//     console.log('Twitter route accessed!');
//     res.send('Hey komal ji');
// });

// app.get('/login',(req,res)=>{
//     res.send('<h1>Please login at chai aur code </h1>')
// })

// app.get('/youtube',(req,res)=>{
//     res.send("<h2>Hey I am youtube</h2>")

// })

// app.get('/sun',(req,res)=>{
//   res.send("<h1>I really love you</h1>")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express=require('express')
require('dotenv').config()

const app=express()

const port=1000;

app.get('/',(req,res)=>{
res.send("hello I am Abhishek")
})

app.get('/komal',(req,res)=>{
  res.send("hello I am ABhishek's Girlfriend komal")
  })

app.listen(process.env.port,()=>{
  console.log(`app is listening on ${port}`)
})

