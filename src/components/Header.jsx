import "../styles/Header.css";

import avatar from "../assets/avatar.png";

import { Plus } from "lucide-react";

import { Search, Bell } from "lucide-react";
function Header() {
  return (
    <div className="head-cont">
      <p>
        <h1>
          Health<span id="care">care.</span>
        </h1>
        <span id="panel">
          <Search size={16} />
          <input type="text" placeholder="search" />
          <Bell id="bel" size={18} />
        </span>
      </p>
      <p>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="avatar1">
          <Plus color="white" size={16} />
        </div>
      </p>
    </div>
  );
}

export default Header;
