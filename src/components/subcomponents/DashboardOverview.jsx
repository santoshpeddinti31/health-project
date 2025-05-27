import CalenderView from "./CalenderView";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import UpcomingSchedule from "./UpcomingSchedule";

function DashboardOverview() {
  return (
    <div>
      <CalenderView />
      <SimpleAppointmentCard />
      <UpcomingSchedule />
    </div>
  );
}

export default DashboardOverview;
