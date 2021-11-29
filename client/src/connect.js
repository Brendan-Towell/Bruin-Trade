//Contains code for calls to database

import axios from 'axios'

//Inserts user in to user_login_info table
  //Need to check that username is not taken
export const insertuser = async () => {
    const response = await axios.get('http://localhost:8080/insertuser')
    console.log("User Created");
  }



//Removes user from user_login_info table
  
export const deleteuser = async () => {
    let username = "TestUser";
    const response = await axios.get(`http://localhost:8080/deleteUser/${username}`)
    console.log("User Deleted");
  };

  