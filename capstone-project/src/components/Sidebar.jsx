import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { BiHistory, BiHelpCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import fullLogo from "../assets/Logo.png";
import smallLogo from "../assets/smalllogo.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const logoSrc = isOpen ? fullLogo : smallLogo;
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "/map",
      name: "Map",
      icon: <FiMap />,
    },
    {
      path: "/missionhistory",
      name: "Mission History",
      icon: <BiHistory />,
    },
    {
      path: "/missionplanner",
      name: "Mission Planner",
      icon: <BsListTask />,
    },
    
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "270px" : "70px" }} className="sidebar">
        <div className="top_section">
          <img
            src={logoSrc}
            alt="Logo"
            style={{
              width: isOpen ? "170px" : "50px",
              display: isOpen ? "block" : "none",
            }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
