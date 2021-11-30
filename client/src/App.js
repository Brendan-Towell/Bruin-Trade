import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './containers/homePage/index';
import { LoginPage } from './containers/loginPage/index';
import { SignupPage} from './containers/signupPage/index';
import { UserPage } from './containers/userPage/index';
import { ErrorPage } from './containers/errorPage/index';
import { DepositPage } from './containers/depositPage/index'
import { TradePage } from './containers/tradePage';
import {insertuser, deleteuser} from './connect.js'

/*
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

*/


function App() {
  return (        
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/login" exact element={<LoginPage/>}/>
          <Route path="/signup" exact element={<SignupPage/>}/>
          <Route path="/home" exact element={<UserPage/>}/>
          <Route path="/deposit" exact element={<DepositPage/>}/>
          <Route path="/trade" exact element={<TradePage/>}/>
          <Route path="*" exact element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;