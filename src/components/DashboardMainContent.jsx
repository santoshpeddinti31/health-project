import "../styles/DashboardMain.css";
import ActivityFeed from "./subcomponents/ActivityFeed";
import AnatomySection from "./subcomponents/AnatomySection";

import { ChevronDown } from "lucide-react";
import DashboardOverview from "./subcomponents/DashboardOverview";
import UpcomingSchedule from "./subcomponents/UpcomingSchedule";

function DashboardMainContent() {
  return (
    <div className="cont1">
      <div className="db-cont">
        <h1>
          Dashboard{" "}
          <span>
            This week <ChevronDown size={12} />{" "}
          </span>
        </h1>
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div className="db-cont2">
        <DashboardOverview />
      </div>
    </div>
  );
}

export default DashboardMainContent;
