import "./Topbar.css";
import { FaUserCircle } from "react-icons/fa";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">ExchoAdmin</span>
        </div>
        <div className="top-right">
          <div className="topbar-avatar-container">
            <FaUserCircle size={50} color="#646CFF" />
          </div>
        </div>
      </div>
    </div>
  );
};
