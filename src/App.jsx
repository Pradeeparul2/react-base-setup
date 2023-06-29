import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
