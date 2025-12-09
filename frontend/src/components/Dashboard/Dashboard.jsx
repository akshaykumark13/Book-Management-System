import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '../../utils/auth';
import BookList from './BookList';
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/');
  };

  return (
    <div className="dash-back" style={{ padding: '20px' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Dashboard</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <p>Welcome, {isAdmin() ? 'Admin' : 'User'}!</p>

        {/* Book List Component */}
        <BookList />
      </div>
    </div>
  );
};

export default Dashboard;
