import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useDashboardLogic } from "./DashboardLogic";
import DashboardView from "./DashboardView";

function Dashboard() {
  // Retrieve the current theme mode (dark or light) from the ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  // Use custom hook to get the necessary dashboard data and logic
  const dashboardData = useDashboardLogic();

  return (
    // Pass the theme mode and dashboard data to the DashboardView component
    <DashboardView isDarkMode={isDarkMode} {...dashboardData} />
  );
}

export default Dashboard;
