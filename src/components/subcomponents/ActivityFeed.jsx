import "../../styles/ActivityFeed.css";

function ActivityFeed() {
  return (
    <div className="active-cont">
      <h1>
        Activity <span>3 appointment on this week</span>
      </h1>
      <div className="graph">
        {/* monday */}
        <div className="chart1">
          <div className="bars">
            <p className="gray"></p>
            <p className="blue"></p>
            <p className="grays">
              <span id="barone"></span>
              <span></span>
            </p>
            <p className="grey"></p>
          </div>
          <p>Mon</p>
        </div>
        {/* tuesday */}
        <div className="chart1">
          <div className="bars">
            <p id="grays">
              <span className="tue" id="brown"></span>
              <span className="tue-blue"></span>
            </p>
            <p id="blue" className="blue"></p>
            <p className="grays">
              <span id="barone"></span>
              <span></span>
            </p>
            <p id="sky" className="grey"></p>
          </div>
          <p>Tues</p>
        </div>
        {/* wednesday */}
        <div className="chart1">
          <div className="bars">
            <p className="gray"></p>
            <p id="gry" className="blue"></p>
            <p className="grays">
              <span className="wed" id="sky"></span>
              <span id="blue"></span>
            </p>
            <p id="blue" className="grey"></p>
          </div>
          <p>Wed</p>
        </div>
        {/* thurs day */}
        <div className="chart1">
          <div className="bars">
            <p id="grays">
              <span id="gry"></span>
              <span id="gry"></span>
            </p>
            <p className="blue"></p>
            <p id="thur" className="grays">
              <span id="sky"></span>
              <span id="blue"></span>
            </p>
            <p className="grey"></p>
          </div>
          <p>Thurs</p>
        </div>
        {/* friday */}
        <div className="chart1">
          <div className="bars">
            <p className="gray"></p>
            <p className="blue"></p>
            <p className="grays">
              <span id="barone"></span>
              <span></span>
            </p>
            <p className="grey"></p>
          </div>
          <p>Fri</p>
        </div>
        {/* satarday */}
        <div className="chart1">
          <div className="bars">
            <p id="grays">
              <span id="brown"></span>
              <span></span>
            </p>
            <p className="blue"></p>
            <p className="grays">
              <span id="barone"></span>
              <span></span>
            </p>
            <p className="grey"></p>
          </div>
          <p>Sat</p>
        </div>
        {/* sunday */}
        <div className="chart1">
          <div className="bars">
            <p className="gray"></p>
            <p className="blue"></p>
            <p className="grays">
              <span id="barone"></span>
              <span></span>
            </p>
            <p className="grey"></p>
          </div>
          <p>Sun</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
