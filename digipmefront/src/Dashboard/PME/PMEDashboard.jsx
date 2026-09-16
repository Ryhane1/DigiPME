import {
  ClipboardCheck,
  FolderKanban,
  Users,
  MessageCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import DashboardLayout from "../DashboardLayout";

function PMEDashboard() {
  return (
    <DashboardLayout role="PME">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Bonjour, PME 👋</h1>
          <p>
            Voici un aperçu de votre transformation digitale.
          </p>
        </div>

        <button className="dashboard-primary-button">
          Nouveau projet
          <ArrowRight size={17} />
        </button>
      </div>

      {/* STATISTIQUES */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon blue">
            <ClipboardCheck size={23} />
          </div>

          <div>
            <span>Maturité digitale</span>
            <strong>78%</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FolderKanban size={23} />
          </div>

          <div>
            <span>Projets en cours</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Users size={23} />
          </div>

          <div>
            <span>Prestataires</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <MessageCircle size={23} />
          </div>

          <div>
            <span>Nouveaux messages</span>
            <strong>5</strong>
          </div>
        </div>

      </div>

      {/* CONTENU */}
      <div className="dashboard-grid">

        {/* MATURITÉ */}
        <div className="dashboard-card maturity-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Votre maturité digitale</h2>
              <p>Dernier diagnostic</p>
            </div>

            <ClipboardCheck size={22} />
          </div>

          <div className="maturity-score">
            <strong>78%</strong>
            <span>Bon niveau</span>
          </div>

          <div className="dashboard-progress">
            <div style={{ width: "78%" }}></div>
          </div>

          <div className="maturity-details">

            <div>
              <span>Présence digitale</span>
              <strong>90%</strong>
            </div>

            <div>
              <span>Outils de gestion</span>
              <strong>75%</strong>
            </div>

            <div>
              <span>Cybersécurité</span>
              <strong>68%</strong>
            </div>

          </div>

          <button className="dashboard-link">
            Voir le diagnostic
            <ArrowRight size={16} />
          </button>

        </div>

        {/* RECOMMANDATIONS */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Recommandations</h2>
              <p>Solutions proposées pour votre PME</p>
            </div>

            <TrendingUp size={22} />
          </div>

          <div className="recommendation-item">
            <div className="recommendation-number">01</div>

            <div>
              <strong>Mettre en place un CRM</strong>
              <p>
                Centralisez vos clients et améliorez votre suivi commercial.
              </p>
            </div>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-number">02</div>

            <div>
              <strong>Améliorer la cybersécurité</strong>
              <p>
                Renforcez la protection de vos données et systèmes.
              </p>
            </div>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-number">03</div>

            <div>
              <strong>Développer votre présence digitale</strong>
              <p>
                Optimisez votre présence sur les canaux numériques.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* PROJETS */}
      <div className="dashboard-card projects-card">

        <div className="dashboard-card-header">
          <div>
            <h2>Mes projets</h2>
            <p>Suivez vos projets de transformation digitale.</p>
          </div>

          <button className="dashboard-link">
            Voir tout
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="project-list">

          <div className="project-row">
            <div>
              <strong>Création d'un site web</strong>
              <span>Prestataire : Ahmed Dev</span>
            </div>

            <div className="project-progress">
              <span>75%</span>
              <div>
                <div style={{ width: "75%" }}></div>
              </div>
            </div>

            <span className="status active-status">
              En cours
            </span>
          </div>

          <div className="project-row">
            <div>
              <strong>Mise en place CRM</strong>
              <span>Prestataire : Digital Solutions</span>
            </div>

            <div className="project-progress">
              <span>40%</span>
              <div>
                <div style={{ width: "40%" }}></div>
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

export default PMEDashboard;