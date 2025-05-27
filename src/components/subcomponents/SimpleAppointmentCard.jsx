import "../../styles/SimpleAppointmentCard.css";

import teeth from "../../assets/teeth.png";

import leg from "../../assets/legs.png";

function SimpleAppointmentCard() {
  return (
    <div className="appoint-cont">
      <div className="appoint1">
        <div className="apt">
          <span>Dentist</span>
          <img src={teeth} alt="teeth" />
        </div>
        <p>09:00-11:00</p>
        <p>Dr. Cameron Williamson</p>
      </div>
      <div className="appoint2">
        <div className="apt1">
          <span>Physiotherapy Appointment</span>
          <img src={leg} alt="physio" />
        </div>
        <p>11:00-12:00</p>
        <p>Dr. Kevin Djones</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
