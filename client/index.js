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

//Create entry for user in table
app.get('/insertuser', (req, res) => {
  let uname = req.query.uname;
  let email = req.query.email;
  let pwd1 = req.query.pwd1;
  let pwd2 = req.query.pwd2;
  if(pwd1 == pwd2){
    let user = {fullname:uname, email:email, password_hash:pwd1};
    let sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
    let query = db.query(sql, (err, result) =>{
      if (err) throw err;
      if (result.length > 0){
        res.send("error: email has already been used to register an account");
        return;
      }
      else{
        sql = `INSERT INTO ${user_login_table} SET ?`;
        query = db.query(sql, user, (err, result) => {
            if (err) throw err;
            //console.log(result)
            res.send("account created successfully");
          });
      }
    });
  }
  else{
    res.send("error: passwords don't match");
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
  
  // Check for username in user database
  let sql = `SELECT * FROM ${user_login_table} WHERE email = '${email}'`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;    //Throw error if received from query

      if (result.length <= 0) {   //If email not in database, exit
        res.send("invalid credentials");
      }
      else{
        // If username and password match database entry, successful login
        if(email == result[0].email && pwd == result[0].password_hash){
          res.send("valid credentials");
        }
        // Input password not match database entry therefore failed login
        else{
          res.send("invalid credentials");
        }
      }
    });
})