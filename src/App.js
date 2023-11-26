import React from 'react';
import Login from './components/login';
import AdminDashboard from './components/admin_dashbord';
import ResponsableDashboard from './components/responsable_dashbord';
import CuvesActive from './components/CuvesActive'; // You need to create this component
import CuvesInactive from './components/CuvesInactive'; // You need to create this component
import PompesActive from './components/PompesActive'; // You need to create this component
import PompesInactive from './components/PompesInactive'; // You need to create this component
import Pompistes from './components/Pompistes'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashbord" element={<AdminDashboard />} />
          <Route path="/responsable-dashbord" element={<ResponsableDashboard />} />
          <Route path="/cuves/active" element={<CuvesActive />} />
          <Route path="/cuves/inactive" element={<CuvesInactive />} />
          <Route path="/pompes/active" element={<PompesActive />} />
          <Route path="/pompes/inactive" element={<PompesInactive />} />
          <Route path="/pompistes" element={<Pompistes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
