import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Singup from './Components/Singup';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter> 
    <Navbar/>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/singup'element={<Singup/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
       {/* <Login/> */}
      
    </div>
  );
}

export default App;
