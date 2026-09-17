import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import DashboardLayout from "../Dashboard/DashboardLayout";

function ProjectOffers() {
    const { projectId } = useParams();
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    const load = () => {
        setLoading(true);
        api
            .get(`/api/pme/projects/${projectId}/offers?page=0&size=20`)
            .then((res) => setOffers(res.data.content))
            .finally(() => setLoading(false));
    };

    useEffect(load, [projectId]);

    const handleAccept = async (offerId) => {
        try {
            await api.put(`/api/pme/offers/${offerId}/accept`);
            toast.success("Offre acceptée.");
            load();
        } catch (err) {
            toast.error("Erreur lors de l'acceptation.");
        }
    };

    return (
        <DashboardLayout role="PME">
            <div className="dashboard-header">
                <div>
                    <h1>Offres reçues</h1>
                    <p>Propositions des freelancers pour ce projet.</p>
                </div>
            </div>

            {loading && <p>Chargement...</p>}
            {!loading && offers.length === 0 && <p>Aucune offre reçue pour l'instant.</p>}

            <div className="dashboard-card projects-card">
                <div className="project-list">
                    {offers.map((offer) => (
                        <div className="project-row" key={offer.id}>
                            <div>
                                <strong>{offer.description}</strong>
                                <span>Livraison : {offer.dateLivraison}</span>
                            </div>
                            <span>{offer.prixProposer} DH</span>
                            <button className="small-button" onClick={() => handleAccept(offer.id)}>
                                Accepter
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

export default ProjectOffers;