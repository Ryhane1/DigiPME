import { useState, useEffect } from "react";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Pagination from "../Projects/Pagination";
import "../Dashboard/Dashboard.css";

const statusLabel = {
    EN_ATTENTE: { text: "En attente", className: "pending-status" },
    ACCEPTEE: { text: "Acceptée", className: "active-status" },
    REFUSEE: { text: "Refusée", className: "completed-status" },
};

function MyOffers() {
    const [offers, setOffers] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api
            .get(`/api/freelancers/my-offers?page=${page}&size=10`)
            .then((res) => {
                setOffers(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .finally(() => setLoading(false));
    }, [page]);

    return (
        <DashboardLayout role="FREELANCE">
            <div className="dashboard-header">
                <div>
                    <h1>Mes offres</h1>
                    <p>Toutes les propositions que vous avez envoyées.</p>
                </div>
            </div>

            {loading && <p>Chargement...</p>}
            {!loading && offers.length === 0 && <p>Aucune offre envoyée pour le moment.</p>}

            <div className="dashboard-card projects-card">
                <div className="project-list">
                    {offers.map((offer) => {
                        const status = statusLabel[offer.status] || statusLabel.EN_ATTENTE;
                        return (
                            <div className="project-row" key={offer.id}>
                                <div>
                                    <strong>{offer.description}</strong>
                                    <span>Livraison : {offer.dateLivraison}</span>
                                </div>
                                <span>{offer.prixProposer} DH</span>
                                <span className={`status ${status.className}`}>{status.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </DashboardLayout>
    );
}

export default MyOffers;