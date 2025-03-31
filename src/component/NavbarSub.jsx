import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


function NavbarSub() {
  return (
 <>
      <div className="navbarSub bg-base-100 h-0 fixed top-0 left-0 right-0 z-50">
    <div className="flex-1">
      <a>
      <div className="rounded-full">
            <img
              alt="Logo of AwadhCircle"
              src="logo.png"
              width="260" 
              />
          </div>
        </a>
    </div>
  </div>
    </>
  )
}

export default NavbarSub
