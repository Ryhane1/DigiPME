import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft } from "lucide-react";

function AccessDeniedPage() {

  return (
    <div className="access-denied-page">
      <div className="access-denied-card">
        <div className="access-denied-icon">
          <ShieldAlert size={48} />
        </div>

        <h1>Accès refusé</h1>
        <p>Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>

        <div className="access-denied-actions">
          <Link to="/login" className="auth-button">
            <ArrowLeft size={17} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccessDeniedPage;
