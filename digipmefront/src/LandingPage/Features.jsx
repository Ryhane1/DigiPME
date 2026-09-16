import {BriefcaseBusiness, ClipboardCheck, Lightbulb, MessageCircle, Search, Star,ArrowRight} from "lucide-react";

const features = [
    {
        icon: ClipboardCheck,
        title: "Diagnostic digital",
        text: "Évaluez rapidement le niveau de maturité numérique de votre entreprise.",
    },
    {
        icon: Lightbulb,
        title: "Recommandations",
        text: "Recevez des recommandations adaptées aux besoins de votre PME.",
    },
    {
        icon: Search,
        title: "Prestataires qualifiés",
        text: "Trouvez des experts IT selon leurs compétences, leur ville et leur expérience.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Gestion des projets",
        text: "Publiez vos projets, recevez des offres et suivez leur avancement.",
    },
    {
        icon: MessageCircle,
        title: "Messagerie",
        text: "Échangez directement avec les prestataires depuis la plateforme.",
    },
    {
        icon: Star,
        title: "Évaluation",
        text: "Évaluez les prestations et consultez les avis des autres entreprises.",
    },
];
function Features() {
    return (
        <section id="fonctionnalites" className="section">

            <div className="container">

                <div className="section-heading">

          <span className="section-label">
            FONCTIONNALITÉS
          </span>

                    <h2>
                        Tout ce dont votre PME a besoin
                    </h2>

                    <p>
                        Une plateforme unique pour diagnostiquer, trouver,
                        collaborer et suivre vos projets de transformation digitale.
                    </p>

                </div>

                <div className="features-grid">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <div className="feature-card" key={index}>

                                <div className="feature-icon">
                                    <Icon size={24} />
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.text}</p>

                                <a href="#comment">
                                    En savoir plus
                                    <ArrowRight size={16} />
                                </a>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
export default  Features;