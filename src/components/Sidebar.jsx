import "../styles/Sidebar.css";

import {
  LayoutGrid,
  ArrowUpDownIcon,
  CalendarDaysIcon,
  SquarePlusIcon,
  ChartNoAxesCombined,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="side-cont">
      <ul>
        <li id="gen">General</li>
        <li id="active">
          <LayoutGrid size={18} />
          <a href="">Dashboard</a>
        </li>
        <li>
          <ArrowUpDownIcon size={18} />
          <a href="">History</a>
        </li>
        <li>
          <CalendarDaysIcon size={18} />
          <a href="">Calendar</a>
        </li>
        <li>
          <SquarePlusIcon size={18} />
          <a href="">Appointments</a>
        </li>
        <li>
          <ChartNoAxesCombined size={18} />
          <a href="">Statistics</a>
        </li>
        <br />
        <br />
        <li id="set">Tools</li>
        <li>
          <MessageCircleMore size={18} />
          <a href="">Chat</a>
        </li>
        <li>
          <Phone size={18} />
          <a href="">Support</a>
        </li>
        <li>
          <Settings size={18} />
          <a href="">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
