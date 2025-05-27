import "../../styles/UpcomingSchedule.css";

import heart from "../../assets/heart.png";

import doctor from "../../assets/doctor.png";

import syringe from "../../assets/syringe.png";

import eye from "../../assets/eye.png";

function UpcomingSchedule() {
  return (
    <div>
      <div className="upcoming-cont">
        <h1>The Upcoming Schedule</h1>
        <span>On Thursday</span>
        <div className="upcome">
          <div className="upcome1">
            <div className="up">
              <span>Health checkup complete</span>
              <img src={syringe} alt="injection" />
            </div>
            <p>11:00 AM</p>
          </div>
          <div className="upcome2">
            <div className="up1">
              <span>Ophthalmologist</span>
              <img src={eye} alt="eyes" />
            </div>
            <p>14:00 PM</p>
          </div>
        </div>
      </div>
      {/* type 2 */}
      <div className="upcoming-cont">
        <span>On Saturday</span>
        <div className="upcome">
          <div className="upcome1">
            <div id="heart" className="up">
              <span>Cardiologist</span>
              <img src={heart} alt="cardio" />
            </div>
            <p>12:00 AM</p>
          </div>
          <div className="upcome2">
            <div id="heart" className="up1">
              <span>Neurologist</span>
              <img src={doctor} alt="eyes" />
            </div>
            <p>16:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
