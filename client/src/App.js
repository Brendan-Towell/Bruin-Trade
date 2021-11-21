import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './containers/HomePage/index';

function App() {
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;