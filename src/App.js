import { Navigate, Route, Routes, useNavigate } from 'react-router';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    //check if email exists in localstorage
    const email = localStorage.getItem("email");
    setIsAuthenticated(email);
  }, [navigate])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to='/home' /> : <Login />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to='/login' />}
        />

      </Routes>
    </div>
  );
}

export default App;
