import PMEDashboard from "./PME/PMEDashboard";
import FreelancerDashboard from "./Freelancer/FreelancerDashboard";
import AdminDashboard from "./Admin/AdminDashboard";

function Dashboard() {
  const role = localStorage.getItem("role");

  if (role === "PME") return <PMEDashboard />;
  if (role === "FREELANCER") return <FreelancerDashboard />;
  if (role === "ADMIN") return <AdminDashboard />;

  return <h1>Accès non autorisé</h1>;
}

export default Dashboard;