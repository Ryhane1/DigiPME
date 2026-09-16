import {
  BriefcaseBusiness,
  Send,
  FolderKanban,
  Star,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout";

function FreelancerDashboard() {
  return (
    <DashboardLayout role="FREELANCE">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Bonjour, Freelance 👋</h1>
          <p>
            Retrouvez vos projets et vos missions.
          </p>
        </div>

        <button className="dashboard-primary-button">
          Voir les projets
          <ArrowRight size={17} />
        </button>
      </div>

      {/* STATISTIQUES */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon blue">
            <BriefcaseBusiness size={23} />
          </div>

          <div>
            <span>Projets disponibles</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Send size={23} />
          </div>

          <div>
            <span>Propositions envoyées</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FolderKanban size={23} />
          </div>

          <div>
            <span>Missions en cours</span>
            <strong>4</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Star size={23} />
          </div>

          <div>
            <span>Note moyenne</span>
            <strong>4.8</strong>
          </div>
        </div>

      </div>

      {/* PROJETS */}
      <div className="dashboard-card">

        <div className="dashboard-card-header">
          <div>
            <h2>Projets recommandés</h2>
            <p>
              Des projets correspondant à vos compétences.
            </p>
          </div>

          <button className="dashboard-link">
            Voir tout
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="freelance-projects">

          <div className="freelance-project">

            <div className="project-info">
              <h3>Création d'une plateforme web</h3>

              <p>
                Une PME recherche un développeur full-stack
                pour créer une plateforme web.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="project-budget">
              <strong>8 000 DH</strong>
              <span>Budget estimé</span>

              <button className="small-button">
                Voir le projet
              </button>
            </div>

          </div>

          <div className="freelance-project">

            <div className="project-info">
              <h3>Application mobile PME</h3>

              <p>
                Développement d'une application mobile
                pour la gestion des clients.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="project-budget">
              <strong>12 000 DH</strong>
              <span>Budget estimé</span>

              <button className="small-button">
                Voir le projet
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* MISSIONS */}
      <div className="dashboard-card projects-card">

        <div className="dashboard-card-header">
          <div>
            <h2>Mes missions</h2>
            <p>État de vos missions actuelles.</p>
          </div>
        </div>

        <div className="project-list">

          <div className="project-row">
            <div>
              <strong>Site e-commerce</strong>
              <span>Client : PME Maroc</span>
            </div>

            <div className="project-progress">
              <span>80%</span>
              <div>
                <div style={{ width: "80%" }}></div>
              </div>
            </div>

            <span className="status active-status">
              En cours
            </span>
          </div>

          <div className="project-row">
            <div>
              <strong>Application de gestion</strong>
              <span>Client : Atlas Services</span>
            </div>

            <div className="project-progress">
              <span>45%</span>
              <div>
                <div style={{ width: "45%" }}></div>
              </div>
            </div>

            <span className="status active-status">
              En cours
            </span>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default FreelancerDashboard;