import {
  FolderKanban,
  CheckCircle2,
  Clock,
  FileText,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout";
import { useDashboard } from "../useDashboard";

const statusLabel = {
  EN_ATTENTE: { text: "En attente", className: "pending-status" },
  EN_COURS: { text: "En cours", className: "active-status" },
  TERMINE: { text: "Terminé", className: "completed-status" },
};

function PMEDashboard() {
  const { data, loading, error } = useDashboard("/api/pme/dashboard");

  if (loading) {
    return (
        <DashboardLayout role="PME">
          <p>Chargement du tableau de bord...</p>
        </DashboardLayout>
    );
  }

  if (error || !data) {
    return (
        <DashboardLayout role="PME">
          <p>Impossible de charger votre tableau de bord.</p>
        </DashboardLayout>
    );
  }

  const {
    profile,
    totalProjets,
    projetsEnCours,
    projetsTermines,
    totalOffresRecues,
    recentProjects,
  } = data;

  return (
      <DashboardLayout role="PME">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <h1>Bonjour, {profile?.nom} 👋</h1>
            <p>Voici un aperçu de vos projets sur DigiPME.</p>
          </div>

          <a href="#" className="dashboard-primary-button">
            Nouveau projet
            <ArrowRight size={17} />
          </a>
        </div>

        {/* STATISTIQUES */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon blue">
              <FolderKanban size={23} />
            </div>
            <div>
              <span>Total projets</span>
              <strong>{totalProjets}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <Clock size={23} />
            </div>
            <div>
              <span>Projets en cours</span>
              <strong>{projetsEnCours}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <CheckCircle2 size={23} />
            </div>
            <div>
              <span>Projets terminés</span>
              <strong>{projetsTermines}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <FileText size={23} />
            </div>
            <div>
              <span>Offres reçues</span>
              <strong>{totalOffresRecues}</strong>
            </div>
          </div>

        </div>

        {/* PROJETS RÉCENTS */}
        <div className="dashboard-card projects-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Mes projets récents</h2>
              <p>Les 5 derniers projets que vous avez publiés.</p>
            </div>
          </div>

          <div className="project-list">

            {recentProjects.length === 0 && (
                <p>Vous n'avez pas encore publié de projet.</p>
            )}

            {recentProjects.map((project) => {
              const status = statusLabel[project.status] || statusLabel.EN_ATTENTE;

              return (
                  <div className="project-row" key={project.id}>
                    <div>
                      <strong>{project.titre}</strong>
                      <span>{project.type}</span>
                    </div>

                    <div>
                      <span>{project.prix} DH</span>
                    </div>

                    <span className={`status ${status.className}`}>
                  {status.text}
                </span>
                  </div>
              );
            })}

          </div>

        </div>

      </DashboardLayout>
  );
}

export default PMEDashboard;