const express = require('express') // Import express
const mysql = require('mysql') //Import mysql
const cors = require('cors') // Import cors
const { response } = require('express')
const app = express() // Call express as a function
const { default: axios } = require('axios');

app.use(cors()) // Enable cors




const db = mysql.createConnection({
    host      : 'localHost',
    user      : 'root',
    password  : 'password',
    database  : 'user_login_credentials'   //Database name
});


db.connect((err) => {
  if(err) throw err;
  console.log('Database connected...')
});

//Create entry for user in table
app.get('/insertuser', (req, res) => {
  let user = {username:'TestUser', password_hash:'TestPassword'};
  let sql = 'INSERT INTO user_login_info SET ?';
  let query = db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.send("User created");
    });
});

//Change username for a given user
app.get('/updateUsername/:id', (req, res) => {
  let newUsername = 'New Username';
  let sql = `UPDATE user_login_info SET username = '${newUsername}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("Username updated");
    });
});

//Delete user from table
app.get('/deleteUser/:username', (req, res) => {
  let sql = `DELETE FROM user_login_info WHERE username = ${req.params.username}`;
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
  res.send("GOOD NIGHT FROM SERVER")
})

app.get('/loginattempt', (req, res, next) => {
  let uname = req.query.uname;
  let pwd = req.query.pwd;
  if(uname == "username" && pwd == "password"){
    res.send("VALID CREDENTIALS");
  }
  else{
    res.send("INVALID CREDENTIALS");
  }



})
