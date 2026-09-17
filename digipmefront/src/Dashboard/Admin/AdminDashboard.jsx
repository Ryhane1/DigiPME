import {
  Users,
  Building2,
  Code2,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout";
import { useDashboard } from "../useDashboard";

function AdminDashboard() {
  const { data, loading, error } = useDashboard("/api/admin/dashboard");

  if (loading) {
    return (
        <DashboardLayout role="ADMIN">
          <p>Chargement du tableau de bord...</p>
        </DashboardLayout>
    );
  }

  if (error || !data) {
    return (
        <DashboardLayout role="ADMIN">
          <p>Impossible de charger le tableau de bord.</p>
        </DashboardLayout>
    );
  }

  const {
    totalUsers,
    totalPME,
    totalFreelancers,
    totalProjects,
    recentUsers,
    recentProjects,
  } = data;

  return (
      <DashboardLayout role="ADMIN">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <h1>Administration 👋</h1>
            <p>Vue globale de la plateforme DigiPME.</p>
          </div>

          <a href="#" className="dashboard-primary-button">
            Gérer les utilisateurs
            <ArrowRight size={17} />
          </a>
        </div>

        {/* STATISTIQUES */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon blue">
              <Users size={23} />
            </div>
            <div>
              <span>Utilisateurs</span>
              <strong>{totalUsers}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <Building2 size={23} />
            </div>
            <div>
              <span>PME</span>
              <strong>{totalPME}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <Code2 size={23} />
            </div>
            <div>
              <span>Freelancers</span>
              <strong>{totalFreelancers}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <FolderKanban size={23} />
            </div>
            <div>
              <span>Projets</span>
              <strong>{totalProjects}</strong>
            </div>
          </div>

        </div>

        <div className="dashboard-grid">

          {/* NOUVEAUX UTILISATEURS */}
          <div className="dashboard-card">

            <div className="dashboard-card-header">
              <div>
                <h2>Nouveaux utilisateurs</h2>
                <p>Dernières inscriptions</p>
              </div>
            </div>

            <div className="admin-users">

              {recentUsers.length === 0 && <p>Aucun utilisateur pour le moment.</p>}

              {recentUsers.map((user) => (
                  <div className="admin-user" key={user.id}>
                    <div className="admin-user-avatar">
                      {user.nom?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <strong>{user.nom}</strong>
                      <span>{user.role}</span>
                    </div>
                  </div>
              ))}

            </div>

          </div>

          {/* PROJETS RÉCENTS */}
          <div className="dashboard-card">

            <div className="dashboard-card-header">
              <div>
                <h2>Projets récents</h2>
                <p>Derniers projets publiés</p>
              </div>
            </div>

            <div className="project-list">

              {recentProjects.length === 0 && <p>Aucun projet pour le moment.</p>}

              {recentProjects.map((project) => (
                  <div className="project-row" key={project.id}>
                    <div>
                      <strong>{project.titre}</strong>
                      <span>{project.type}</span>
                    </div>

                    <span>{project.prix} DH</span>
                  </div>
              ))}

            </div>

          </div>

        </div>

      </DashboardLayout>
  );
}

export default AdminDashboard;