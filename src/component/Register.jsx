import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const API_URL = "http://localhost:3000"; // Backend URL

function Register() {
  const [profile, setProfile] = useState(""); // Profile Type: Faculty or Company
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Faculty-specific fields
  const [collegeName, setCollegeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");

  // Company-specific fields
  const [companyName, setCompanyName] = useState("");
  const [companyRegistrationId, setCompanyRegistrationId] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [mainAddress, setMainAddress] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    console.log("Password:", password); // ✅ Debugging: See password value in console
    console.log("Confirm Password:", confirmPassword);
  
    if (!password) {
      setError("Please enter a password");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
  
    const formData = new FormData();
    formData.append("profile", profile); // ✅ Send profile type
    formData.append("username", username);
    formData.append("phone", phoneNumber);
    formData.append("password", password);
  
    if (profile === "College Faculty") {
      formData.append("collegeName", collegeName);
      formData.append("designation", designation);
      formData.append("collegeAddress", collegeAddress);
      formData.append("about", about);
      formData.append("skills", skills);
    } else {
      formData.append("companyName", companyName);
      formData.append("companyRegistrationId", companyRegistrationId);
      formData.append("companyType", companyType);
      formData.append("mainAddress", mainAddress);
      formData.append("address1", address1);
      formData.append("address2", address2);
    }
  
    if (photo) {
      formData.append("photo", photo);
    }
  
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      alert(response.data.message);
      navigate(profile === "College Faculty" ? "/college" : "/company");
    } catch (error) {
      console.error("❌ Registration Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Registration failed");
    }
  };
  
  
  

  return (
    <div className="login-page">
      <h1 className="login-title">Register</h1>
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-row">
            <div className="form-column">
              <h3>Common Information</h3>
              <select className="dropdown" value={profile} onChange={(e) => setProfile(e.target.value)} required>
                <option value="" disabled>Select Profile</option>
                <option value="College Faculty">College Faculty</option>
                <option value="Company">Company</option>
              </select>
              <input type="text" placeholder="Username (min 5 characters)" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={5} />
              <input type="tel" placeholder="Phone Number (10 digits)" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="[0-9]{10}" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {profile === "College Faculty" && (
              <div className="form-column">
                <h3>Faculty Information</h3>
                <input type="text" placeholder="College Name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required />
                <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                <input type="text" placeholder="College Address" value={collegeAddress} onChange={(e) => setCollegeAddress(e.target.value)} required />
                <textarea placeholder="About Yourself" value={about} onChange={(e) => setAbout(e.target.value)} required rows="4" />
                <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} required />
              </div>
            )}

            {profile === "Company" && (
              <div className="form-column">
                <h3>Company Information</h3>
                <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                <input type="text" placeholder="Company Registration ID" value={companyRegistrationId} onChange={(e) => setCompanyRegistrationId(e.target.value)} required />
                <input type="text" placeholder="Company Type" value={companyType} onChange={(e) => setCompanyType(e.target.value)} required />
                <input type="text" placeholder="Main Address" value={mainAddress} onChange={(e) => setMainAddress(e.target.value)} required />
                <input type="text" placeholder="Branch Address 1 (optional)" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                <input type="text" placeholder="Branch Address 2 (optional)" value={address2} onChange={(e) => setAddress2(e.target.value)} />
              </div>
            )}
          </div>

          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
