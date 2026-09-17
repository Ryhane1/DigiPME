import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { typeLabel } from "./ActiviteTypes";
import "../Dashboard/Dashboard.css";
import "./Projects.css";
import FreelancerOfferBox from "./FreelancerOfferBox.jsx";

const statusLabel = {
    EN_ATTENTE: { text: "En attente", className: "pending-status" },
    EN_COURS: { text: "En cours", className: "active-status" },
    TERMINE: { text: "Terminé", className: "completed-status" },
};

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api
            .get(`/api/projects/${id}`)
            .then((res) => setProject(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Supprimer ce projet ?")) return;

        try {
            await api.delete(`/api/projects/${id}`);
            toast.success("Projet supprimé.");
            navigate("/my-projects");
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return (
            <DashboardLayout role={role}>
                <p>Chargement...</p>
            </DashboardLayout>
        );
    }

    if (!project) {
        return (
            <DashboardLayout role={role}>
                <div className="empty-state">Projet introuvable.</div>
            </DashboardLayout>
        );
    }

    const status = statusLabel[project.status] || statusLabel.EN_ATTENTE;

    return (
        <DashboardLayout role={role}>
            <div className="page-container project-details-page">
                <div className="project-details-card">

                    <h1>{project.titre}</h1>

                    <div className="project-details-meta">
                        <span className="project-card-type">{typeLabel(project.type)}</span>
                        <span className={`status ${status.className}`}>{status.text}</span>
                    </div>

                    <p className="project-details-description">
                        {project.description || "Aucune description fournie."}
                    </p>

                    <div className="project-details-info">
                        <div>
                            <span>Budget</span>
                            <strong>{project.prix} DH</strong>
                        </div>
                        <div>
                            <span>Date souhaitée</span>
                            <strong>{project.date}</strong>
                        </div>
                    </div>

                    {role === "PME" && (
                        <div className="project-details-actions">
                            <button className="dashboard-primary-button" onClick={() => navigate(`/projects/${id}/edit`)}>
                                Modifier
                            </button>
                            <button className="small-button" onClick={() => navigate(`/projects/${id}/offers`)}>
                                Voir les offres reçues
                            </button>
                            <button className="small-button btn-danger" onClick={handleDelete}>
                                Supprimer
                            </button>
                        </div>
                    )}

                    {role === "FREELANCER" && (
                        <FreelancerOfferBox projectId={id} />
                    )}

                </div>
            </div>
        </DashboardLayout>
    );
}

export default ProjectDetails;