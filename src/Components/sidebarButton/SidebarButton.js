import React from 'react'
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import "./sidebarButton.css"

function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={props.to}>
      <IconContext.Provider value={{ size: "22px", className:"btn-icon"}}>
        <div className={btnClass}>
          <i>{props.icon}</i>
          <p>{props.title}</p>
        </div>
      </IconContext.Provider>
    </Link>
  );
}

export default SidebarButton