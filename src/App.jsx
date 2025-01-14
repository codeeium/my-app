import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home2 from './pages/Home2.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Class from './pages/Class';
import Login from './pages/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Home2 /> : <Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    path="/home"
                    element={isAuthenticated ? <Home2 /> : <Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route path="/class" element={<Class />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<Help />} />
                {/*<Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
