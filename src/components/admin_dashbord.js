
import React from 'react';
import './admin_dashbord.css'; 
import { Link } from 'react-router-dom';



const AdminDashboard = () => {
  
  const stations = [
    { id: 1, name: 'Station 1', status: 'active' },
    { id: 2, name: 'Station 2', status: 'inactive' },
   
  ];

  return (
    <div className="admin-dashboard">
      <div className="navbar">
        <div className="profile-logo"></div> {}
        <div className="navbar-links">
          <Link to="/">List des Stations</Link>
          <Link to="/stations-inactive">Stations Inactive</Link>
          <Link to="/users-inactive">Users Inactive</Link>
        </div>
      </div>
      <div className="station-grid">
        {stations.map(station => (
          <Link key={station.id} to={`/station/${station.id}`} className={`station-square ${station.status}`}>
            <div className="station-content">
              <h3>{station.name}</h3>
              <p>Status: {station.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
