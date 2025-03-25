import express from 'express'

const server = express()

const port = 5713
const hostname = 'localhost'

server.get('/', async (req, res)=>{
  res.send('hi, can i help you ?')
})

server.listen(port, hostname, ()=>{
  console.log(`[${new Date().toLocaleString()}] ready on http://${hostname}:${port}`)
})
