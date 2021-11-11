const express = require('express') // Import express
const cors = require('cors') // Import cors
const { response } = require('express')
const app = express() // Call express as a function
const { default: axios } = require('axios');


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

//API Call Formatting 
//Endpoint for getting API Data
app.get(`/stockprice/:symbol`, async (req, res) => {
  symbol = req.params.symbol;
  const api_url = `https://sandbox.iexapis.com/v1/stock/${symbol}/quote?token=Tsk_deaf8ea0e7ec4eb081e0b751ef6337df&period=annual`;
  const fetch_res = await axios.get(api_url) 
    .then(response => {
      console.log("Successful API call for %s stock!", symbol);
      res.send(response.data)
    })
    .catch(error => {
      console.log("API Failure");
    });
});