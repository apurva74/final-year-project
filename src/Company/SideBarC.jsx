import React, { useState } from 'react'
import { Avatar, Button, Modal, TextField, Box, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import '../css file/sidebar.css';

const lucknowAreas = [
  "Aliganj", "Aminabad", "Chowk", "Gomti Nagar", "Hazratganj", "Indira Nagar",
  "Jankipuram", "Rajajipuram", "Mahanagar", "Vikas Nagar"
];

function SideBarC() {
  const [open, setOpen] = useState(false);
  const [faculty, setFaculty] = useState({
    name: 'Faculty Name',
    department: 'Department - College Name',
    avatar: '',
    background: '',
    position: '',
    about: '',
    working: '',
    location: '',
  });

  const [formData, setFormData] = useState({ ...faculty });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setFaculty(formData);
    handleClose();
  };

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar_profile">
        <img
          className="background-image"
          src={faculty.background || "https://via.placeholder.com/400x150"}
          alt="Profile Background"
        />
        <div className="profile_details">
          <Avatar
            src={faculty.avatar || "https://via.placeholder.com/100"}
            sx={{ width: 80, height: 80, border: "3px solid white", marginTop: "-40px" }}
          />
          <h3>{faculty.name}</h3>
          <p>{faculty.department}</p>
          <p><b>Position:</b> {faculty.position || "Not set"}</p>
          <p><b>Role:</b> Company</p>
          <p><b>Location:</b> {faculty.location || "Not set"}</p>
          <p><b>About:</b> {faculty.about || "Add a short bio"}</p>
          <Button variant="contained" startIcon={<EditIcon />} onClick={handleOpen} sx={{ marginTop: 1 }}>
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: '80vh', // Limits modal height
          overflowY: 'auto', // Enables vertical scrolling
        }}>
          <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
          <TextField label="Name" name="name" fullWidth value={formData.name} onChange={handleChange} margin="normal" />
          <TextField label="Department" name="department" fullWidth value={formData.department} onChange={handleChange} margin="normal" />
          
          {/* Profile & Background Image Upload */}
          <TextField label="Profile Image URL" name="avatar" fullWidth value={formData.avatar} onChange={handleChange} margin="normal" />
          <TextField label="Background Image URL" name="background" fullWidth value={formData.background} onChange={handleChange} margin="normal" />

          <TextField label="Position" name="position" fullWidth value={formData.position} onChange={handleChange} margin="normal" />
          <TextField label="Working" name="working" fullWidth value={formData.working} onChange={handleChange} margin="normal" />
          <TextField label="About" name="about" fullWidth multiline rows={2} value={formData.about} onChange={handleChange} margin="normal" />
          
          {/* Dropdown for Location */}
          <TextField
            select
            label="Location"
            name="location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
            margin="normal"
          >
            {lucknowAreas.map((area) => (
              <MenuItem key={area} value={area}>
                {area}
              </MenuItem>
            ))}
          </TextField>

          <TextField label="Role" fullWidth value="Company" margin="normal" disabled />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default SideBarC
