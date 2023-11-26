import React from 'react';
import { NavLink } from 'react-router-dom';
import './responsable_dashbord.css'; 

const ResponsableDashboard = () => {
  return (
    <div className="responsable-dashboard">
      <nav className="responsable-nav">
        <NavLink to="/cuves/active" activeClassName="active-link">Cuves Active</NavLink>
        <NavLink to="/cuves/inactive" activeClassName="active-link">Cuves Inactive</NavLink>
        <NavLink to="/pompes/active" activeClassName="active-link">Pompes Active</NavLink>
        <NavLink to="/pompes/inactive" activeClassName="active-link">Pompes Inactive</NavLink>
        <NavLink to="/pompistes" activeClassName="active-link">Pompistes</NavLink>
      </nav>
     
    </div>
  );
};

export default ResponsableDashboard;
