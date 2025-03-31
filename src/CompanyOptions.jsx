import React from "react";
import { Avatar } from "@mui/material";
import "./css file/CollegeFaculty.css"; // Make sure this file is correctly named

function CompanyOptions({ Icon, title, avatar }) {
  return (
    <div className="header_options">
      {Icon && <Icon className="icon_style" />} {/* Added class for styling */}
      {avatar && <Avatar src={avatar} className="avatar_style" />} {/* Avatar with src support */}
      <span>{title}</span>
    </div>
  );
}

export default CompanyOptions;
