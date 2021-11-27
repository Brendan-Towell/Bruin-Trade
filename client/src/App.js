import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './containers/homePage/index';
import { LoginPage } from './containers/loginPage/index';
import { SignupPage} from './containers/signupPage/index';
import { UserPage } from './containers/userPage/index';

function App() {
  return (        
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/login" exact element={<LoginPage/>}/>
          <Route path="/signup" exact element={<SignupPage/>}/>
          <Route path="/user" exact element={<UserPage/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;