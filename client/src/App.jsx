import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Auth/Login/Login'; 
import Register from './pages/Auth/Register/Register'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from './components/layouts/MainLayouts';
import AuthLayout from './components/layouts/AuthLayout';
import Home from "./pages/Home";
// import Login from "./pages/Auth/Login/Login";
// import Register from "./pages/Auth/Register/Register";
import "./app.css"


function App() {

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      
    </div>
  );
    <>
      {/* <BrowserRouter>
    {/* home */}
      {/* <Routes>
        <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />} />
        </Route>
{/* auth routes */}
      {/* <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={ <Register/>}/>
      </Route> */}



      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Home />
    </>
  )
}

export default App;

