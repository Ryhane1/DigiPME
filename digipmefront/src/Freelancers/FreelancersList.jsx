import { useState, useEffect } from "react";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Pagination from "../Projects/Pagination";
import { Star } from "lucide-react";
import "../Dashboard/Dashboard.css";
import "../Projects/Projects.css";
import { useNavigate } from "react-router-dom";

function FreelancersList() {
    const [freelancers, setFreelancers] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        api
            .get(`/api/pme/freelancers?page=${page}&size=9`)
            .then((res) => {
                setFreelancers(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .finally(() => setLoading(false));
    }, [page]);

    return (
        <DashboardLayout role="PME">
            <div className="page-container">
                <div className="page-header">
                    <div>
                        <h1>Prestataires</h1>
                        <p>Découvrez les freelancers inscrits sur la plateforme.</p>
                    </div>
                </div>

                {loading && <p>Chargement...</p>}
                {!loading && freelancers.length === 0 && (
                    <div className="empty-state">Aucun prestataire pour le moment.</div>
                )}

                {!loading && freelancers.length > 0 && (
                    <div className="projects-cards-grid">
                        {freelancers.map((f) => (
                            <div className="project-card" key={f.id}>
                                <div className="project-card-top">
                                    <span className="project-card-type">{f.specialite}</span>
                                    {f.noteMoyenne && (
                                        <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#f59e0b", fontSize: 13 }}>
                                            <Star size={14} fill="#f59e0b" /> {f.noteMoyenne.toFixed(1)}
                                        </span>
                                    )}
                                </div>

                                <h3>{f.nom}</h3>
                                <p>{f.adresse || "Adresse non renseignée"}</p>
                                <p>{f.telephone}</p>
                                <div className="project-card-footer">
                                    <button className="small-button" onClick={() => navigate(`/freelancers/${f.id}/reviews`)}>
                                        Voir les avis
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </DashboardLayout>
    );
}

export default FreelancersList;