const express = require('express') // Import express
const cors = require('cors') // Import cors
const app = express() // Call express as a function
app.use(cors()) // Enable cors
app.listen(8080, (req, res) => { // Run a server
    console.log("SERVER IS RUNNING ON 8080");
})
app.get('/getdata1', (req, res, next) => {
  res.send("HELLO FROM SERVER")
})
app.get('/getdata2', (req, res, next) => {
  res.send("GOOD NIGHT FROM SERVER")
})