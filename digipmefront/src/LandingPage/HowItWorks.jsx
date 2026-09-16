const steps = [
    {
        number: "01",
        title: "Créez votre compte",
        text: "Inscrivez votre entreprise et complétez votre profil.",
    },
    {
        number: "02",
        title: "Faites votre diagnostic",
        text: "Répondez à quelques questions pour évaluer votre maturité digitale.",
    },
    {
        number: "03",
        title: "Obtenez des recommandations",
        text: "Découvrez les solutions numériques adaptées à vos besoins.",
    },
    {
        number: "04",
        title: "Trouvez un prestataire",
        text: "Comparez les profils et recevez des propositions.",
    },
    {
        number: "05",
        title: "Suivez votre projet",
        text: "Gérez les tâches et suivez l'avancement du projet.",
    },
];

function HowItWorks() {
    return (
        <section id="comment" className="section section-gray">

            <div className="container">

                <div className="section-heading">

          <span className="section-label">
            COMMENT ÇA MARCHE ?
          </span>

                    <h2>
                        De votre besoin à votre projet digital
                    </h2>

                    <p>
                        DigiPME simplifie chaque étape de votre transformation numérique.
                    </p>

                </div>

                <div className="steps">

                    {steps.map((step, index) => (

                        <div className="step" key={step.number}>

                            <div className="step-number">
                                {step.number}
                            </div>

                            <div className="step-content">

                                <h3>{step.title}</h3>

                                <p>{step.text}</p>

                            </div>

                            {index < steps.length - 1 && (
                                <div className="step-line"></div>
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
export default HowItWorks;