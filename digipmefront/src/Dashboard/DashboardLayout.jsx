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
  const getMenu = () => {
    if (role === "PME") {
      return [
        { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
        { icon: ClipboardCheck, label: "Diagnostic digital", path: "#" },
        { icon: FolderKanban, label: "Mes projets", path: "#" },
        { icon: Users, label: "Prestataires", path: "#" },
        { icon: MessageCircle, label: "Messages", path: "#" },
        { icon: Star, label: "Évaluations", path: "#" },
      ];
    }

    if (role === "FREELANCE") {
      return [
        { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
        { icon: BriefcaseBusiness, label: "Projets", path: "#" },
        { icon: FolderKanban, label: "Mes missions", path: "#" },
        { icon: MessageCircle, label: "Messages", path: "#" },
        { icon: Star, label: "Évaluations", path: "#" },
      ];
    }

    return [
      { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
      { icon: Users, label: "Utilisateurs", path: "#" },
      { icon: FolderKanban, label: "Projets", path: "#" },
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
          {role === "FREELANCE" && "Espace Freelance"}
          {role === "ADMIN" && "Administration"}
        </div>

        <nav className="dashboard-menu">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                href={item.path}
                className={`dashboard-menu-item ${
    index === 0 ? "active" : ""
}`}
                key={item.label}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="dashboard-sidebar-bottom">

          <a href="#" className="dashboard-menu-item">
            <User size={19} />
            <span>Mon profil</span>
          </a>

          <a href="#" className="dashboard-menu-item">
            <Settings size={19} />
            <span>Paramètres</span>
          </a>

          <a href="/" className="dashboard-menu-item logout">
            <LogOut size={19} />
            <span>Déconnexion</span>
          </a>

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
