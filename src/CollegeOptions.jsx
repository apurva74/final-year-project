import React from 'react'
import "./css file/CollegeFaculty.css";
import { Avatar } from '@mui/material'
function CollegeOptions({Icon,title,avatar}) {
  return (
    <div className='header_options'>
        {
            Icon && <Icon></Icon>
        }
        {
            avatar && <Avatar name={avatar}/>
        }
            
            <span>{title}</span>
    </div>
  )
}

export default CollegeOptions
