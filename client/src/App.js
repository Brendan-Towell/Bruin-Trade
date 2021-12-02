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