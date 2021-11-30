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
    //let email = "TestUser";
    //const response = await axios.get(`http://localhost:8080/deleteUser/${email}`,{
    const response = await axios.get('http://localhost:8080/deleteUser',{
      params: {
        email: 'TestUser@me.com'
      }
    })
    console.log("User Deleted");
  };

  
  export const updatebalance = async () => {
    const response = await axios.get('http://localhost:8080/updatebalance',{
      params: {
        transaction_value: 10
      }
    })
    console.log("Balance Updated");
  };