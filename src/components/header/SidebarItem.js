import React, { useState } from "react";

export default function SidebarItem({ item, level, openLevels, setOpenLevels }) {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    if (level === 1) {
      setOpenLevels({ ...openLevels, [item.id]: !openLevels[item.id] });
    }
    setOpen(!open);
  };

  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title" onClick={handleItemClick}>
        <span>{item.title}</span>
        {/* <i className={`fa-solid ${open ? "fa-arrow-down" : "fa-arrow-right"} toggle-btn`}></i> */}
        <i className={`fas ${open ? "fa-chevron-right" : "fa-chevron-right"} toggle-btn`}></i>
      </div>
      {open && item.childrens && (
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              level={level + 1}
              openLevels={openLevels}
              setOpenLevels={setOpenLevels}
            />
          ))}
        </div>
      )}
    </div>
  );
}
