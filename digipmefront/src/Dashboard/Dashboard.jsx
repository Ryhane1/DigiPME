import PMEDashboard from "../dashboard/PME/PMEDashboard";
import FreelancerDashboard from "../dashboard/Freelancer/FreelancerDashboard";
import AdminDashboard from "../dashboard/Admin/AdminDashboard";

function Dashboard() {

  // Temporaire
  // Plus tard : récupérer le rôle depuis le JWT
  const role = "PME";

  if (role === "PME") {
    return <PMEDashboard />;
  }

  if (role === "FREELANCE") {
    return <FreelancerDashboard />;
  }

  if (role === "ADMIN") {
    return <AdminDashboard />;
  }

  return <h1>Accès non autorisé</h1>;
}

export default Dashboard;