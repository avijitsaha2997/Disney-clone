import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
