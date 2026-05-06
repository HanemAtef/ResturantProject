import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from './components/layouts/MainLayouts';
import AuthLayout from './components/layouts/AuthLayout';
import Home from "./pages/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import "./app.css"


function App() {

  return (
    <>
    <BrowserRouter>
    {/* home */}
    <Routes>
        <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />} />
        </Route>
{/* auth routes */}
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={ <Register/>}/>
      </Route>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
