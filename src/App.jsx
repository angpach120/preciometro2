import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Toaster from './components/ui/toaster';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const logged = localStorage.getItem('auth') === 'true';
    setIsAuthenticated(logged);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div style={{textAlign:'center', marginTop:'50px'}}>Cargando...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Login onLogin={() => {
                  localStorage.setItem('auth', 'true');
                  setIsAuthenticated(true);
                }} />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated
              ? <Dashboard onLogout={() => {
                  localStorage.removeItem('auth');
                  setIsAuthenticated(false);
                }} />
              : <Navigate to="/" />
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
