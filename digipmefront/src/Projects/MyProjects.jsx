import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Pagination from "./Pagination";
import { typeLabel } from "./activiteTypes";
import "../Dashboard/Dashboard.css";
import "./Projects.css";

const statusLabel = {
    EN_ATTENTE: { text: "En attente", className: "pending-status" },
    EN_COURS: { text: "En cours", className: "active-status" },
    TERMINE: { text: "Terminé", className: "completed-status" },
};

function MyProjects() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadProjects = () => {
        setLoading(true);

        api
            .get(`/api/projects/my-projects?page=${page}&size=9`)
            .then((res) => {
                setProjects(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        loadProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer ce projet ?")) return;

        try {
            await api.delete(`/api/projects/${id}`);
            toast.success("Projet supprimé.");
            loadProjects();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DashboardLayout role="PME">
            <div className="page-container">

                <div className="page-header">
                    <div>
                        <h1>Mes projets</h1>
                        <p>Gérez les projets que vous avez publiés.</p>
                    </div>

                    <button className="dashboard-primary-button" onClick={() => navigate("/projects/new")}>
                        Nouveau projet
                    </button>
                </div>

                {loading && <p>Chargement des projets...</p>}

                {!loading && projects.length === 0 && (
                    <div className="empty-state">Vous n'avez pas encore publié de projet.</div>
                )}

                {!loading && projects.length > 0 && (
                    <div className="projects-cards-grid">
                        {projects.map((project) => {
                            const status = statusLabel[project.status] || statusLabel.EN_ATTENTE;

                            return (
                                <div className="project-card" key={project.id}>
                                    <div className="project-card-top">
                                        <span className="project-card-type">{typeLabel(project.type)}</span>
                                        <span className={`status ${status.className}`}>{status.text}</span>
                                    </div>

                                    <h3>{project.titre}</h3>
                                    <p>{project.description}</p>

                                    <div className="project-card-footer">
                                        <span className="project-card-price">{project.prix} DH</span>

                                        <div className="project-card-actions">
                                            <button className="small-button" onClick={() => navigate(`/projects/${project.id}`)}>Voir</button>
                                            <button className="small-button" onClick={() => navigate(`/projects/${project.id}/offers`)}>Offres</button>
                                            <button className="small-button" onClick={() => navigate(`/projects/${project.id}/edit`)}>Modifier</button>
                                            <button className="small-button btn-danger" onClick={() => handleDelete(project.id)}>Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

            </div>
        </DashboardLayout>
    );
}

export default MyProjects;