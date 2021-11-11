import React, {useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uname: '', pwd: '', validation: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({uname: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({pwd: event.target.value});
  }

  handleSubmit = async (event) => {
    //alert('A name was submitted: ' + this.state.value);
    const response = await axios.get('http://localhost:8080/loginattempt',{
      params: {
        uname: this.state.uname,
        pwd: this.state.pwd
      }
    })
    this.setState({validation: response.data});
    alert(this.state.validation);
  }

  render() {
    // NOTE: FOR FINAL USE, CHANGE INPUT TYPE OF PASSWORD FIELD TO "password"
    // It is set to text to prevent chrome from giving security popups
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {'\t'}Username:{'\t'}
          <input type="text" value={this.state.uname} onChange={this.handleUsernameChange} />
          {'\t'}Password:{'\t'}
          <input type="text" value={this.state.pwd} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App(){
  const [message, setMessage] = useState()

  const handleClick1 = async () => {
    const response = await axios.get('http://localhost:8080/getdata1')
setMessage(response.data);
    console.log("button 1");
  }

  const handleClick2 = async () => {
    const response = await axios.get('http://localhost:8080/getdata2')
setMessage(response.data);
    console.log("button 2");
  }



  return(
    <div className="App">
      <h1>CLICK US</h1>
      <button onClick={handleClick1}>BUTTON 1</button>
      <button onClick={handleClick2}>BUTTON 2</button>
      <h2>{message}</h2>
      <Login />
    </div>
  )
}

export default App;