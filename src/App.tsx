import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user } = useAuth();
  return (
    <Routes>
      {/* Add your routes here */}
    </Routes>
  );
}

export default App;