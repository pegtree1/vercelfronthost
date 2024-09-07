import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import './Navbar.css'; // Make sure to create the CSS file for styling

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Destructure isAuthenticated and logout from useAuth
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    navigate('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/aboutpet" activeClassName="active">About PET</NavLink></li>
        <li><NavLink to="/homepage" activeClassName="active">Genealogy</NavLink></li>
        <li><NavLink to="/history" activeClassName="active">History</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
        {/* <li><NavLink to="/familytree" activeClassName="active">Family Tree</NavLink></li> */}
        <li><NavLink to="/MemberList" activeClassName="active">Member List</NavLink></li>
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
