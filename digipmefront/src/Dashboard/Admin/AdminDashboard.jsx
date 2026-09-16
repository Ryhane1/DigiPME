import {
  Users,
  Building2,
  Code2,
  FolderKanban,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout.jsx";

function AdminDashboard() {



  return (
    <DashboardLayout role="ADMIN">

      {/* HEADER */}
      <div className="dashboard-header">

        <div>
          <h1>Administration 👋</h1>
          <p>
            Vue globale de la plateforme DigiPME.
          </p>
        </div>

        <button className="dashboard-primary-button">
          Gérer les utilisateurs
          <ArrowRight size={17} />
        </button>

      </div>

      {/* STATISTIQUES */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon blue">
            <Users size={23} />
          </div>

          <div>
            <span>Utilisateurs</span>
            <strong>358</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Building2 size={23} />
          </div>

          <div>
            <span>PME</span>
            <strong>185</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Code2 size={23} />
          </div>

          <div>
            <span>Freelancers</span>
            <strong>173</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <FolderKanban size={23} />
          </div>

          <div>
            <span>Projets</span>
            <strong>246</strong>
          </div>
        </div>

      </div>

      {/* ANALYSE */}
      <div className="dashboard-grid">

        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Activité de la plateforme</h2>
              <p>Évolution des projets</p>
            </div>

            <TrendingUp size={22} />
          </div>

          <div className="admin-chart">

            <div className="chart-bar" style={{ height: "45%" }}>
              <span>Jan</span>
            </div>

            <div className="chart-bar" style={{ height: "60%" }}>
              <span>Fév</span>
            </div>

            <div className="chart-bar" style={{ height: "50%" }}>
              <span>Mar</span>
            </div>

            <div className="chart-bar" style={{ height: "75%" }}>
              <span>Avr</span>
            </div>

            <div className="chart-bar" style={{ height: "85%" }}>
              <span>Mai</span>
            </div>

            <div className="chart-bar" style={{ height: "95%" }}>
              <span>Juin</span>
            </div>

          </div>

        </div>

        {/* NOUVEAUX UTILISATEURS */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Nouveaux utilisateurs</h2>
              <p>Dernières inscriptions</p>
            </div>
          </div>

          <div className="admin-users">

            <div className="admin-user">
              <div className="admin-user-avatar">A</div>

              <div>
                <strong>Atlas Digital</strong>
                <span>PME</span>
              </div>

              <small>Aujourd'hui</small>
            </div>

            <div className="admin-user">
              <div className="admin-user-avatar">M</div>

              <div>
                <strong>Mohamed Dev</strong>
                <span>Freelance</span>
              </div>

              <small>Hier</small>
            </div>

            <div className="admin-user">
              <div className="admin-user-avatar">S</div>

              <div>
                <strong>Smart Solutions</strong>
                <span>PME</span>
              </div>

              <small>Hier</small>
            </div>

          </div>

        </div>

      </div>

      {/* PROJETS */}
      <div className="dashboard-card projects-card">

        <div className="dashboard-card-header">
          <div>
            <h2>Projets récents</h2>
            <p>
              Activité récente des projets de la plateforme.
            </p>
          </div>

          <button className="dashboard-link">
            Voir tout
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="project-list">

          <div className="project-row">
            <div>
              <strong>Création site web</strong>
              <span>PME : Atlas Digital</span>
            </div>

            <span className="status active-status">
              En cours
            </span>
          </div>

          <div className="project-row">
            <div>
              <strong>CRM personnalisé</strong>
              <span>PME : Smart Solutions</span>
            </div>

            <span className="status completed-status">
              Terminé
            </span>
          </div>

          <div className="project-row">
            <div>
              <strong>Application mobile</strong>
              <span>PME : Maroc Services</span>
            </div>

            <span className="status pending-status">
              En attente
            </span>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;
