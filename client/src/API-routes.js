// FILE SHOULD CONTAIN URL ENDPOINTS FOR USERS TO INTERACT W/ APP


//Goes in index.js

//API Call Formatting 
//Endpoint for getting API Data
App.get(`/stockprice/:symbol`, async (req, res) => {
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



//Goes in App.js
let symbol = "CRM";   //Change to access different stock

const getStockPrice = async () => {
  const api_url = `http://localhost:8080/stockprice/${symbol}`;
  const response = await axios.get(api_url);
  let price = response.data.latestPrice;
  setMessage(`Latest price of ${symbol}: $${price}`);

}