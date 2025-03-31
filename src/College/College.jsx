import React from "react";
import CollegeFaculty from "./CollegeFaculty";
import Sidebar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget";
import "../css file/college.css";


function College() {
  console.log("College component loaded"); // Debugging log
  return (
      <div className="college">
        <CollegeFaculty />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
  );
}

export default College;
