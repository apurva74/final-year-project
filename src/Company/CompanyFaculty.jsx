import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "../css file/CollegeFaculty.css"; // Corrected CSS File Name
import CompanyOptions from '../CompanyOptions'; // Custom component for Company-specific options
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';

function CompanyFaculty() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Logout Function
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session if stored
    navigate('/register'); // Redirect to Register page
  };

  return (
    <div className="faculty-container">
      {/* Header Section */}
      <div className="faculty-header">
        <div className="header-left">
          {/* Logo Section */}
          <div className="header-logo">
            <img src="logo.png" alt="AwadhCircle Logo" width="260" />
          </div>

          {/* Search Section */}
          <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder="Search for jobs, internships..." />
          </div>
        </div>

        {/* Header Right Section */}
        <div className="header-right">
          <CompanyOptions Icon={HomeIcon} title="Home" />
          <CompanyOptions Icon={PeopleIcon} title="My Network" />
          <CompanyOptions Icon={BusinessCenterIcon} title="Jobs" />
          <CompanyOptions Icon={MessageIcon} title="Messaging" />
          <CompanyOptions Icon={NotificationsActiveIcon} title="Notifications" />

          {/* Avatar with Dropdown */}
          <div className="avatar-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <Avatar />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyFaculty;
