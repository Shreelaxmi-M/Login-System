import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if email exists in localStorage and set the authentication state
    const email = localStorage.getItem("email");
    setIsAuthenticated(email);  // This will be null or the email value
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect "/" to the "/login" page */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Route for login */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />

          {/* Route for home */}
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
