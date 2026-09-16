import {ArrowRight, Users} from "lucide-react";

function CTA() {
    return (
        <section className="cta-section">

            <div className="container">

                <div className="cta-box">

                    <div className="cta-icon">
                        <Users size={30} />
                    </div>

                    <h2>
                        Prêt à digitaliser votre entreprise ?
                    </h2>

                    <p>
                        Commencez votre transformation digitale avec DigiPME Maroc.
                    </p>

                    <a href="/register/pme" className="btn btn-white btn-large">
                        Créer un compte
                        <ArrowRight size={18} />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default CTA;