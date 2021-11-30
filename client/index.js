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
    let sql = `INSERT INTO ${user_login_table} SET ?`;
    let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send("User created");
      });
  }
  else{
    console.log("passwords don't match");
    res.send("passwords don't match");
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
  let uname = req.query.email;
  let pwd = req.query.password;
  
  // Check for username in user database
  let sql = `SELECT * FROM '${user_login_table}' WHERE username = '${uname}'`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;    //Throw error if received from query

      if (result.length <= 0) {   //If username not in database, exit
        res.send("Username not found in database");
      }
      else{
        // If username and password match database entry, successful login
        if(uname == result[0].username && pwd == result[0].password_hash){  
          console.log("VALID CREDENTIALS");
          res.send("VALID CREDENTIALS");
        }
        // Input password not match database entry therefore failed login
        else{
          console.log("INVALID CREDENTIALS");
          res.send("INVALID CREDENTIALS");
        }
      }
      return;
    });

})

app.get('/testfunction',(req,res,next) =>{
  console.log("successful testfunction call")
  let uname = req.query.uname;
  let email = req.query.email;
  let pwd1 = req.query.pwd1;
  let pwd2 = req.query.pwd2;
  console.log("uname: " + uname);
  console.log("email: " + email)
  console.log("pwd1: " + pwd1);
  console.log("pwd2: " + pwd2);
  if(pwd1 != pwd2){
    console.log("passwords do not match, registration invalid");
  }
})