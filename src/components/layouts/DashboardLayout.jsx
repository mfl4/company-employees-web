import { Sidebar } from "../sidebar/Sidebar.jsx";
import { Topbar } from "../topbar/Topbar.jsx";

export const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </>
  );
};
