import { ArrowLeft, ArrowRight } from "lucide-react";
import "../../styles/CalenderView.css";
function CalenderView() {
  return (
    <div className="cal-cont">
      <div className="calender">
        <p className="head">
          October 2025{" "}
          <span>
            <ArrowLeft size={16} />
            <ArrowRight size={16} />
          </span>
        </p>
        <div className="cal">
          <p className="cal1">
            <span>Mon</span>
            <span id="date">25</span>
            <span>10:00</span>
            <span>11:00</span>
            <span>12:00</span>
          </p>
          <p id="tues" className="cal2">
            <span>Tues</span>
            <span id="date">26</span>
            <span>08:00</span>
            <span id="badge">09:00</span>
            <span>10:00</span>
          </p>
          <p className="cal2">
            <span>Wed</span>
            <span id="date">27</span>
            <span>12:00</span>
            <span>__</span>
            <span>13:00</span>
          </p>

          <p className="cal2">
            <span>Thurs</span>
            <span id="date">28</span>
            <span>10:00</span>
            <span id="badge1">11:00</span>
            <span>__</span>
          </p>
          <p className="cal2">
            <span>Fri</span>
            <span id="date">29</span>
            <span>__</span>
            <span>14:00</span>
            <span>16:00</span>
          </p>
          <p className="cal2">
            <span>Sat</span>
            <span id="date">30</span>
            <span id="badge2">12:00</span>
            <span>14:00</span>
            <span>15:00</span>
          </p>
          <p id="last" className="cal2">
            <span>Sun</span>
            <span id="date">31</span>
            <span id="badge3">09:00</span>
            <span>10:00</span>
            <span>11:00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CalenderView;
