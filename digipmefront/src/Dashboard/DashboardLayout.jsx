import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  MessageCircle,
  Star,
  User,
  Settings,
  LogOut,
  ClipboardCheck,
  BriefcaseBusiness,
} from "lucide-react";


function DashboardLayout({ role, children }) {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("role");
    navigate("/login");
  };


  const getMenu = () => {
    if (role === "PME") {
      return [
        { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
        { icon: ClipboardCheck, label: "Diagnostic digital", path: "#" },
        { icon: FolderKanban, label: "Mes projets", path: "/my-projects" },
        { icon: Users, label: "Prestataires", path: "/freelancers" },
        { icon: MessageCircle, label: "Messages", path: "#" },
        { icon: Star, label: "Évaluations", path: "#" },
      ];
    }

    if (role === "FREELANCER") {
      return [
        { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
        { icon: BriefcaseBusiness, label: "Projets", path: "/projects" },
        { icon: FolderKanban, label: "Mes offres", path: "/my-offers" },
        { icon: MessageCircle, label: "Messages", path: "#" },
        { icon: Star, label: "Évaluations", path: "/my-reviews" },
      ];
    }
    return [
      { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
      { icon: Users, label: "Utilisateurs", path: "/admin/users" },      { icon: FolderKanban, label: "Projets", path: "#" },
      { icon: BriefcaseBusiness, label: "Prestataires", path: "#" },
      { icon: Settings, label: "Paramètres", path: "#" },
    ];
  };

  const menu = getMenu();

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <LayoutDashboard size={20} />
          </div>

          <span>
            DigiPME <strong>Maroc</strong>
          </span>
        </div>

        <div className="dashboard-role">
          {role === "PME" && "Espace PME"}
          {role === "FREELANCER" && "Espace Freelance"}
          {role === "ADMIN" && "Administration"}
        </div>

        <nav className="dashboard-menu">
          {menu.map((item) => {
            const Icon = item.icon;

            if (item.path === "#") {
              return (
                  <span className="dashboard-menu-item disabled" key={item.label}>
          <Icon size={19} /><span>{item.label}</span>
        </span>
              );
            }
            return (
                <NavLink
                    to={item.path}
                    key={item.label}
                    className={({ isActive }) => `dashboard-menu-item ${isActive ? "active" : ""}`}
                >
                  <Icon size={19} /><span>{item.label}</span>
                </NavLink>
            );
          })}
        </nav>

        <div className="dashboard-sidebar-bottom">
          <NavLink to="/profile" className={({ isActive }) => `dashboard-menu-item ${isActive ? "active" : ""}`}>
            <User size={19} /><span>Mon profil</span>
          </NavLink>

          <Link to="/login" className="dashboard-menu-item logout" onClick={handleLogout}>
            <LogOut size={19} /><span>Déconnexion</span>
          </Link>

        </div>
      </aside>

      {/* CONTENU */}
      <main className="dashboard-main">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;
