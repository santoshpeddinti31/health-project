import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="cont">
      <Header />
      <div className="main-cont">
        <div className="cont-1">
          <Sidebar />
        </div>
        <div className="cont-2">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
