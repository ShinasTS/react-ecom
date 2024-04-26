import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Shope from './pages/Shope';
import Contactus from './pages/Contactus';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Shope' element={<Shope/>} />
          <Route path='/Contactus' element={<Contactus/>} />



        </Routes>
      </Router>

    </div>
  );
}

export default App;
