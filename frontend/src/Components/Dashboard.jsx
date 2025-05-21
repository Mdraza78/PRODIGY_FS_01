import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Create this CSS file for styling

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Optional: Call logout API if you have one
    // axios.post('/api/logout');
    
    // Redirect to login page
    navigate('/login');
  };

  // If user data isn't loaded yet (still checking auth)
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <h1>authAPP</h1>
        </div>
        <div className="nav-right">
          <span className="welcome-message">Welcome, {user.fullName}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>
        <p>This is a protected page that only authenticated users can access.</p>
        
        {/* Add your dashboard components here */}
        <div className="dashboard-widgets">
          <div className="widget">Widget 1</div>
          <div className="widget">Widget 2</div>
          <div className="widget">Widget 3</div>
        </div>
      </div>
    </div>
  );
}