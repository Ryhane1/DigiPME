import {ArrowRight, Building2, CheckCircle, Code2} from "lucide-react";

function RegisterSection() {
    return (
        <section className="register-section">

            <div className="container">

                <div className="section-heading">

          <span className="section-label">
            REJOIGNEZ DIGIPME
          </span>

                    <h2>
                        Choisissez votre profil
                    </h2>

                    <p>
                        Que vous soyez une PME à la recherche de solutions digitales
                        ou un freelance souhaitant proposer ses services, DigiPME
                        vous accompagne.
                    </p>

                </div>

                <div className="register-grid">

                    {/* PME */}

                    <div className="register-card">

                        <div className="register-icon blue">
                            <Building2 size={32} />
                        </div>

                        <span className="register-type">
              POUR LES ENTREPRISES
            </span>

                        <h3>
                            Je suis une PME
                        </h3>

                        <p>
                            Identifiez vos besoins numériques, trouvez les bons
                            prestataires et gérez vos projets de transformation digitale.
                        </p>

                        <ul>

                            <li>
                                <CheckCircle size={17} />
                                Évaluer votre maturité digitale
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Trouver des prestataires qualifiés
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Publier vos projets
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Suivre vos projets
                            </li>

                        </ul>

                        <a href="/register/pme" className="btn btn-primary register-btn">
                            Créer mon compte PME
                            <ArrowRight size={18} />
                        </a>

                    </div>


                    {/* FREELANCE */}

                    <div className="register-card">

                        <div className="register-icon green">
                            <Code2 size={32} />
                        </div>

                        <span className="register-type green-text">
              POUR LES PROFESSIONNELS
            </span>

                        <h3>
                            Je suis un Freelance
                        </h3>

                        <p>
                            Présentez vos compétences, découvrez les projets des PME
                            et développez votre activité grâce à DigiPME.
                        </p>

                        <ul>

                            <li>
                                <CheckCircle size={17} />
                                Créer votre profil professionnel
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Présenter vos compétences
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Consulter les projets
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Envoyer vos propositions
                            </li>

                        </ul>

                        <a href="/register/freelance" className="btn btn-green register-btn">
                            Créer mon compte Freelance
                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default RegisterSection;