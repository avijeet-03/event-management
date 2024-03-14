import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAdmin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Event Hub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin-dashboard">DASHBOARD</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/activity">Activity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-event">Create Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
