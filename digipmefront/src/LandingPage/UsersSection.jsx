import {Building2, CheckCircle, Code2} from "lucide-react";

function UsersSection() {
    return (
        <section id="apropos" className="section">

            <div className="container">

                <div className="section-heading">

          <span className="section-label">
            UNE PLATEFORME POUR TOUS
          </span>

                    <h2>
                        Connecter les PME aux bons experts
                    </h2>

                    <p>
                        DigiPME crée un espace de collaboration entre
                        les entreprises et les professionnels du numérique.
                    </p>

                </div>

                <div className="users-grid">

                    <div className="user-card">

                        <div className="user-icon blue">
                            <Building2 size={30} />
                        </div>

                        <h3>Pour les PME</h3>

                        <p>
                            Identifiez vos besoins et trouvez les solutions
                            numériques adaptées à votre entreprise.
                        </p>

                        <ul>

                            <li>
                                <CheckCircle size={17} />
                                Diagnostic digital
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Recherche de prestataires
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Gestion des projets
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Évaluation des prestations
                            </li>

                        </ul>

                    </div>

                    <div className="user-card">

                        <div className="user-icon green">
                            <Code2 size={30} />
                        </div>

                        <h3>Pour les prestataires IT</h3>

                        <p>
                            Développez votre activité en présentant vos compétences
                            aux PME qui recherchent vos services.
                        </p>

                        <ul>

                            <li>
                                <CheckCircle size={17} />
                                Profil professionnel
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Portfolio
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Propositions commerciales
                            </li>

                            <li>
                                <CheckCircle size={17} />
                                Gestion des missions
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default UsersSection;