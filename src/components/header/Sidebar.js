import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import items from './Sidebar.json';

const Sidebar = ({ setBtnShow }) => {
  const [openLevels, setOpenLevels] = useState({});

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <button className='btn-close' onClick={() => setBtnShow(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          level={1}
          openLevels={openLevels}
          setOpenLevels={setOpenLevels}
        />
      ))}
    </div>
  );
};

export default Sidebar;
