const express = require('express') // Import express
const mysql = require('mysql') //Import mysql
const cors = require('cors') // Import cors
const app = express() // Call express as a function
const { default: axios } = require('axios');
const { extractEventHandlers } = require('@mui/base');

app.use(cors()) // Enable cors

const db = mysql.createConnection({
    host      : 'localHost',
    user      : 'root',
    password  : 'password',
    database  : 'account_info'   //Database name
});

db.connect((err) => {
  if(err) throw err;
  console.log('Database connected...')
});

// Name of table for user login credentials in database
const user_login_table = 'user_login_info';
const user_watchlists_table = 'user_watchlists';
const account_balance_table = 'account_financial_data';

//Create entry for user in table
app.get('/insertuser', (req, res) => {
  let uname = req.query.uname;
  let email = req.query.email;
  let pwd1 = req.query.pwd1;
  let pwd2 = req.query.pwd2;
  
  if(uname === "" || email === "" || pwd1 === "" || pwd2 === ""){
    res.send({status:"all fields must be populated", token:-1});
    return;
  }

  if(pwd1 == pwd2){
    let user = {fullname:uname, email:email, password_hash:pwd1};
    let sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
    let query = db.query(sql, (err, result) =>{
      if (err) throw err;
      if (result.length > 0){
        res.send({status:"error: email has already been used to register an account",token:-1});
        return;
      }
      else{
        sql = `INSERT INTO ${user_login_table} SET ?`;
        query = db.query(sql, user, (err, result) => {
            if (err) throw err;
        });
        
        let current_id = 0;
        sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
        query = db.query(sql, (err, result) => {
          if (err) throw err;
          res.send({status:"account created successfully",token:result[0].id});
          current_id = result[0].id;
        });
        
        sql = `INSERT INTO ${account_financial_data} SET ?`;
        let user_financial = {user_id: current_id, account_balance: 0, cash_available: 0}
        query = db.query(sql, user_financial, (err, result) => {
          if (err) throw err;
          res.send({status:"account financials initialized"})
        })

      }
    });
  }
  else{
    res.send({status:"error: passwords don't match",token:"-1"});
  }
});


//Change username for a given user
app.get('/updateUsername/:id', (req, res) => {
  let newUsername = 'New Username';
  let sql = `UPDATE ${user_login_table} SET username = '${newUsername}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("Username updated");
    });
});


//Delete user from table
app.get('/deleteUser', (req, res) => {
  let email = req.query.email
  let sql = `DELETE FROM ${user_login_table} WHERE email = '${email}'`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("User deleted");
    });
});

// Add stock to a users watchlist
app.get('/addStockToWatchlist', (req,res) => {
  let stock_symbol = req.query.stock_symbol;
  let user_id = req.query.user_id;
  // Check if stock already on watchlist
  let sql = `SELECT * FROM ${user_watchlists_table} WHERE user_id = '${user_id}' AND stock_symbol = '${stock_symbol}'`;
  let query = db.query(sql, (err, result) =>{
    if (err) throw err;
    if (result.length > 0){
      res.send({status:"error: stock already on watchlist for user"});
    }
    else {
      let insert_query = `INSERT INTO ${user_watchlists_table} (user_id, stock_symbol) VALUES ('${user_id}', '${stock_symbol}')`;
      let query = db.query(insert_query, (err, result) => {
        if (err) throw err;
        res.send({status:"stock added to user's watchlist"})
      })
    }
  })
})

// Remove stock from a users watchlist
app.get('/removeStockFromWatchlist', (req,res) => {
  let stock_symbol = req.query.stock_symbol;
  let user_id = req.query.user_id;
  // Make sure stock on watchlist before removing
  let sql = `SELECT * FROM ${user_watchlists_table} WHERE user_id = '${user_id}' AND stock_symbol = '${stock_symbol}'`;
  let query = db.query(sql, (err, result) =>{
    if (err) throw err;
    if (result.length == 0){
      res.send({status:"error: stock not on watchlist cannot be removed"});
    }
    else {
      let delete_query = `DELETE FROM ${user_watchlists_table} WHERE user_id = '${user_id}' AND stock_symbol = '${stock_symbol}'`;
      let query = db.query(delete_query, (err, result) => {
        if (err) throw err;
        res.send({status:"stock removed from user's watchlist"});
      })
    }
  })
})



// Return all stocks on a specified users watchlist
app.get('/getUsersWatchlist', (req,res) => {
  let user_id = req.query.user_id;
  let sql = `SELECT * FROM ${user_watchlists_table} WHERE user_id = '${user_id}'`;
  
  let query = db.query(sql, (err, result) =>{
    if (err) throw err;
    let stock_list = []
    for (var i = 0; i < result.length; i++) {
      let symbol = result[i].stock_symbol;
      stock_list.push(symbol);
    }
    res.send(stock_list);
  })
}) 


// Desposits a value into the users account in database
app.get('/deposit', (req,res) => {
  let user_id = req.query.user_id;
  let trans_amt = req.query.deposit_amount;
  //Add amount to cash available since all deposits are cash
  let cash_sql = `UPDATE ${account_balance_table} SET cash_available = cash_available+${trans_amt} WHERE user_id = '${user_id}'`;
  let cash_query = db.query(cash_sql, (err, result) => {
    if (err) throw err;
  })

  //Add amount to total account value/balance
  let sql = `UPDATE ${account_balance_table} SET account_balance = account_balance+${trans_amt} WHERE user_id = '${user_id}'`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
  })
})



//Retrieves a users account balance from database
app.get('/getBalance', (req,res) => {
  let user_id = req.query.user_id;
  console.log(user_id)
  console.log("TEST")
  let sql = `SELECT * FROM ${account_balance_table} WHERE user_id = '${user_id}'`;
  let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result[0].account_balance);
      res.send({balance_info:result[0].account_balance});
  })
  
})



app.listen(8080, (req, res) => { // Run a server
  console.log("SERVER IS RUNNING ON 8080");
})



// Server processing login attempt from client
app.get('/loginattempt', (req, res, next) => {
  let email = req.query.email;
  let pwd = req.query.password;

  if(email === "" || pwd === ""){
    res.send({status:"email or password is empty", token:-1});
    return;
  }
  
  // Check for username in user database
  let sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;    //Throw error if received from query

      if (result.length <= 0) {   //If email not in database, exit
        res.send({status:"invalid credentials", token:-1});
      }
      else{
        // If username and password match database entry, successful login
        if(email == result[0].email && pwd == result[0].password_hash){
          res.send({status:"valid credentials", token:result[0].id});
        }
        // Input password not match database entry therefore failed login
        else{
          res.send({status:"invalid credentials", token:-1});
        }
      }
    });
})