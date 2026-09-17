import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
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

function ProjectsList() {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        api
            .get(`/api/projects?page=${page}&size=9`)
            .then((res) => {
                setProjects(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [page]);

    return (
        <DashboardLayout role={role}>
            <div className="page-container">

                <div className="page-header">
                    <div>
                        <h1>Tous les projets</h1>
                        <p>Parcourez les projets publiés sur la plateforme.</p>
                    </div>

                    {role === "PME" && (
                        <button
                            className="dashboard-primary-button"
                            onClick={() => navigate("/projects/new")}
                        >
                            Nouveau projet
                        </button>
                    )}
                </div>

                {loading && <p>Chargement des projets...</p>}

                {!loading && projects.length === 0 && (
                    <div className="empty-state">Aucun projet pour le moment.</div>
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

                                        <button
                                            className="small-button"
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                        >
                                            Voir le projet
                                        </button>
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

export default ProjectsList;