import React from 'react';
import {Routes, Route, Navegate} from 'react-router-dom';

import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Footer from './components/layouts/Footer/Footer';

function App() {
    return(
        <div classname= "App" style={{  display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
             
             <main style={{ flex: '1' }}>  
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Navegate to='/login' />} />
            </Routes>
            </main> 

            <Footer />
    
        </div>
    );
}

export default App;

