import {ArrowRight, BarChart3, CheckCircle, Handshake, Lightbulb} from "lucide-react";

function Hero() {
    return (
        <section id="accueil" className="hero">

            <div className="container hero-grid">

                <div className="hero-text">

          <span className="badge">
            <span className="dot"></span>
            La transformation digitale des PME marocaines
          </span>

                    <h1>
                        Donnez à votre PME
                        <span> les moyens de réussir </span>
                        sa transformation digitale.
                    </h1>

                    <p>
                        DigiPME Maroc vous accompagne pour identifier vos besoins
                        numériques, trouver les bons prestataires et gérer vos projets
                        digitaux simplement.
                    </p>

                    <div className="hero-buttons">

                        <a href="/register/pme" className="btn btn-primary btn-large">
                            Commencer maintenant
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#fonctionnalites"
                            className="btn btn-light btn-large"
                        >
                            Découvrir la plateforme
                        </a>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <strong>100%</strong>
                            <span>Accompagnement</span>
                        </div>

                        <div>
                            <strong>3</strong>
                            <span>Profils utilisateurs</span>
                        </div>

                        <div>
                            <strong>1</strong>
                            <span>Plateforme centralisée</span>
                        </div>

                    </div>

                </div>

                <div className="hero-card-area">

                    <div className="hero-circle"></div>

                    <div className="dashboard-card">

                        <div className="card-top">

                            <div>
                                <small>Votre maturité digitale</small>
                                <h3>Diagnostic PME</h3>
                            </div>

                            <div className="score">
                                78%
                            </div>

                        </div>

                        <div className="progress">
                            <div className="progress-value"></div>
                        </div>

                        <div className="diagnostic-list">

                            <div>
                <span className="check">
                  <CheckCircle size={16} />
                </span>
                                Présence digitale
                                <b>90%</b>
                            </div>

                            <div>
                <span className="check">
                  <CheckCircle size={16} />
                </span>
                                Outils de gestion
                                <b>75%</b>
                            </div>

                            <div>
                <span className="check">
                  <CheckCircle size={16} />
                </span>
                                Cybersécurité
                                <b>68%</b>
                            </div>

                        </div>

                        <div className="recommendation">

                            <Lightbulb size={20} />

                            <div>
                                <strong>Recommandation</strong>

                                <p>
                                    Mettre en place un CRM adapté à votre activité.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="floating-card floating-one">

                        <Handshake size={20} />

                        <div>
                            <strong>Prestataire trouvé</strong>
                            <span>Expert IT qualifié</span>
                        </div>

                    </div>

                    <div className="floating-card floating-two">

                        <BarChart3 size={20} />

                        <div>
                            <strong>Projet en cours</strong>
                            <span>65% terminé</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;