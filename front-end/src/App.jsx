import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="/home" element={<HomeComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
