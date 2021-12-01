const express = require('express') // Import express
const mysql = require('mysql') //Import mysql
const cors = require('cors') // Import cors
const app = express() // Call express as a function
const { default: axios } = require('axios');

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
        sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
        query = db.query(sql, (err, result) => {
          if (err) throw err;
          res.send({status:"account created successfully",token:result[0].id});
        });
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
  let stock_symbol = req.params.stock_symbol;
  let user_id = req.params.id;
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
  let stock_symbol = req.params.stock_symbol;
  let user_id = req.params.id;
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


app.listen(8080, (req, res) => { // Run a server
  console.log("SERVER IS RUNNING ON 8080");
})

app.get('/getdata1', (req, res, next) => {
  res.send("HELLO FROM SERVER")
})

app.get('/getdata2', (req, res, next) => {
  console.log("getdata2");
  res.send("GOOD NIGHT FROM SERVER");
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