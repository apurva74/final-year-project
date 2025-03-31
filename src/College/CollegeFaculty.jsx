import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import SearchIcon from '@mui/icons-material/Search';
import "../css file/CollegeFaculty.css";
import CollegeOptions from '../CollegeOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';

function CollegeFaculty() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session if stored
    navigate('/register'); // Redirect to Register page
  };

  return (
    <div className="faculty-container">
      {/* Header Section */}
      <div className="faculty-header">
        <div className="header-left">
          <div className="header-logo">
            <img src="logo.png" alt="AwadhCircle Logo" width="260" />
          </div>
          <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-right">
          <CollegeOptions Icon={HomeIcon} title="Home" />
          <CollegeOptions Icon={PeopleIcon} title="My Network" />
          <CollegeOptions Icon={BusinessCenterIcon} title="Jobs" />
          <CollegeOptions Icon={MessageIcon} title="Messaging" />
          <CollegeOptions Icon={NotificationsActiveIcon} title="Notification" />
          
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

export default CollegeFaculty;
