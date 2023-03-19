import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import './App.css';

import Car from './pages/Car';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="app">
      <ToastContainer position='bottom-center' limit={1} />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/car/:carId' element={<Car/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;