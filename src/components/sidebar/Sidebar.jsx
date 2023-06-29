import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FaClipboardList, FaPeopleGroup } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <AiFillHome />
              Home
            </li>
            <li className="sidebar-list-item">
              <FaUserAlt />
              Employee Management
            </li>
            <li className="sidebar-list-item">
              <FaPeopleGroup />
              Division Management
            </li>
            <li className="sidebar-list-item">
              <FaClipboardList />
              Presence Management
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
