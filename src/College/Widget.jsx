import React from "react";
import { Info } from "@mui/icons-material";
import "../css file/widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_top">
        <div className="widget_header">
          <h4>New Comments</h4>
          <Info />
        </div>
        <div className="widget_body">
          <ul className="widget_options">
            <li>
              <h4>Great insights on job search strategies!</h4>
              <p>6d ago * 4,550 readers</p>
            </li>
            <li>
              <h4>I totally agree with the two-pizza rule!</h4>
              <p>2d ago * 6,120 readers</p>
            </li>
            <li>
              <h4>Workplace breakups can be tough, thanks for sharing!</h4>
              <p>3d ago * 4,450 readers</p>
            </li>
            <li>
              <h4>Shorter work hours really do help productivity!</h4>
              <p>1d ago * 4,550 readers</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Widget;
