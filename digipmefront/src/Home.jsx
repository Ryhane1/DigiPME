import {Building2} from "lucide-react";
import Hero from "./LandingPage/Hero";
import Features from "./LandingPage/Features";
import HowItWorks from "./LandingPage/HowItWorks";
import UsersSection from "./LandingPage/UsersSection";
import RegisterSection from "./LandingPage/RegisterSection";
import CTA from "./LandingPage/CTA";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-content">

                <a href="#accueil" className="logo">
          <span className="logo-icon">
            <Building2 size={22} />
          </span>
                    <span>
            DigiPME <strong>Maroc</strong>
          </span>
                </a>

                <div className="nav-links">
                    <a href="#accueil">Accueil</a>
                    <a href="#fonctionnalites">Fonctionnalités</a>
                    <a href="#comment">Comment ça marche</a>
                    <a href="#apropos">À propos</a>
                </div>

                <div className="nav-actions">
                    <a href="/login" className="btn btn-outline">
                        Connexion
                    </a>
                    <a href="/register/pme" className="btn btn-primary">
                        Créer un compte
                    </a>
                </div>

            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-content">

                <div>

                    <a href="#accueil" className="logo footer-logo">

            <span className="logo-icon">
              <Building2 size={20} />
            </span>

                        <span>
              DigiPME <strong>Maroc</strong>
            </span>

                    </a>

                    <p>
                        La plateforme intelligente pour accompagner
                        les PME marocaines dans leur transformation digitale.
                    </p>

                </div>

                <div className="footer-links">

                    <div>

                        <h4>Plateforme</h4>

                        <a href="#fonctionnalites">
                            Fonctionnalités
                        </a>

                        <a href="#comment">
                            Comment ça marche
                        </a>

                        <a href="#apropos">
                            À propos
                        </a>

                    </div>

                    <div>

                        <h4>Compte</h4>

                        <a href="#accueil">
                            Connexion
                        </a>

                        <a href="#accueil">
                            Inscription
                        </a>

                        <a href="#accueil">
                            Contact
                        </a>

                    </div>

                </div>

            </div>

            <div className="container copyright">

        <span>
          © 2026 DigiPME Maroc. Tous droits réservés.
        </span>

                <span>
          Projet de transformation digitale des PME marocaines.
        </span>

            </div>

        </footer>
    );
}

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <UsersSection />
                <RegisterSection/>
                <CTA />
            </main>

            <Footer />
        </>
    );
}

export default App;