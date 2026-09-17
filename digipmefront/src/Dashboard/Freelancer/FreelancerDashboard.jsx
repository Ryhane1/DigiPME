import {
  BriefcaseBusiness,
  Send,
  FolderKanban,
  Star,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout";
import { useDashboard } from "../useDashboard";

function FreelancerDashboard() {
  const { data, loading, error } = useDashboard("/api/freelancers/dashboard");

  if (loading) {
    return (
        <DashboardLayout role="FREELANCE">
          <p>Chargement du tableau de bord...</p>
        </DashboardLayout>
    );
  }

  if (error || !data) {
    return (
        <DashboardLayout role="FREELANCE">
          <p>Impossible de charger votre tableau de bord.</p>
        </DashboardLayout>
    );
  }

  const {
    profile,
    projetsDisponibles,
    propositionsEnvoyees,
    missionsEnCours,
    noteMoyenne,
    recommendedProjects,
    recentOffers,
  } = data;

  return (
      <DashboardLayout role="FREELANCE">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <h1>Bonjour, {profile?.nom} 👋</h1>
            <p>Retrouvez vos projets et vos missions.</p>
          </div>

          <a href="#" className="dashboard-primary-button">
            Voir les projets
            <ArrowRight size={17} />
          </a>
        </div>

        {/* STATISTIQUES */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon blue">
              <BriefcaseBusiness size={23} />
            </div>
            <div>
              <span>Projets disponibles</span>
              <strong>{projetsDisponibles}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <Send size={23} />
            </div>
            <div>
              <span>Propositions envoyées</span>
              <strong>{propositionsEnvoyees}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <FolderKanban size={23} />
            </div>
            <div>
              <span>Missions en cours</span>
              <strong>{missionsEnCours}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <Star size={23} />
            </div>
            <div>
              <span>Note moyenne</span>
              <strong>{noteMoyenne ? noteMoyenne.toFixed(1) : "—"}</strong>
            </div>
          </div>

        </div>

        {/* PROJETS RECOMMANDÉS */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Projets récents</h2>
              <p>Derniers projets publiés sur la plateforme.</p>
            </div>
          </div>

          <div className="freelance-projects">

            {recommendedProjects.length === 0 && (
                <p>Aucun projet disponible pour le moment.</p>
            )}

            {recommendedProjects.map((project) => (
                <div className="freelance-project" key={project.id}>
                  <div className="project-info">
                    <h3>{project.titre}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <div className="project-budget">
                    <strong>{project.prix} DH</strong>
                    <span>Budget estimé</span>

                    <button className="small-button">Voir le projet</button>
                  </div>
                </div>
            ))}

          </div>

        </div>

        {/* MES OFFRES */}
        <div className="dashboard-card projects-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Mes offres récentes</h2>
              <p>Les propositions que vous avez envoyées.</p>
            </div>
          </div>

          <div className="project-list">

            {recentOffers.length === 0 && (
                <p>Vous n'avez pas encore envoyé de proposition.</p>
            )}

            {recentOffers.map((offer) => (
                <div className="project-row" key={offer.id}>
                  <div>
                    <strong>{offer.description}</strong>
                    <span>Livraison : {offer.dateLivraison}</span>
                  </div>

                  <div>
                    <span>{offer.prixProposer} DH</span>
                  </div>
                </div>
            ))}

          </div>

        </div>

      </DashboardLayout>
  );
}

export default FreelancerDashboard;