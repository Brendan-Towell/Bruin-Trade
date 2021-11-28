import axios from 'axios'

//Inserts user in to user_login_info table
function InsertUser(username, password_hash){
    
    //Need to check that username is not taken
    
    const insertuser = async () => {
        const response = await axios.get('http://localhost:8080/insertuser')
        console.log("User Created");
      } 



}

  //Removes user from user_login_info table
  function DeleteUser(username){
    
    const deleteuser = async () => {
        let username = "Test Username";
        const response = await axios.get(`http://localhost:8080/deleteUser/${username}`)
        console.log("User Deleted");
      } 
    
  }
  