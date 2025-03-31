import React from 'react'
import CompanyFaculty from "./CompanyFaculty";
import SidebarC from "./SideBarC";
import FeedC from "./FeedC";
import WidgetC from "./WidgetC";
import "../css file/college.css";

function Company() {
  return (
    <div className='company'>
    <CompanyFaculty />
      <div className="app_body">
        <SidebarC />
        <FeedC />
        <WidgetC />
      </div>
    </div>
  )
}

export default Company
