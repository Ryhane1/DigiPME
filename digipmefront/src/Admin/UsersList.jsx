import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Pagination from "../Projects/Pagination";
import "../Dashboard/Dashboard.css";
import "../Projects/Projects.css";
import "./Admin.css";

const FILTERS = [
    { value: "ALL", label: "Tous" },
    { value: "ADMIN", label: "Administrateurs" },
    { value: "PME", label: "PME" },
    { value: "FREELANCER", label: "Freelancers" },
];

const ROLE_BADGE = {
    ADMIN: { text: "Admin", className: "pending-status" },
    PME: { text: "PME", className: "completed-status" },
    FREELANCER: { text: "Freelancer", className: "active-status" },
};

function UsersList() {
    const navigate = useNavigate();
    const myEmail = localStorage.getItem("nom"); // "nom" contient l'email (subject du JWT)

    const [users, setUsers] = useState([]);
    const [roleFilter, setRoleFilter] = useState("ALL");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        setLoading(true);

        const url =
            roleFilter === "ALL"
                ? `/api/users?page=${page}&size=10`
                : `/api/users/role/${roleFilter}?page=${page}&size=10`;

        api
            .get(url)
            .then((res) => {
                setUsers(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [roleFilter, page, reloadKey]);

    const changeFilter = (value) => {
        setRoleFilter(value);
        setPage(0);
    };

    const handleDelete = async (user) => {
        if (!window.confirm(`Supprimer ${user.nom} ? Ses projets, offres et avis seront aussi supprimés.`)) return;

        try {
            await api.delete(`/api/users/${user.id}`);
            toast.success("Utilisateur supprimé.");

            if (users.length === 1 && page > 0) setPage(page - 1);
            else setReloadKey((k) => k + 1);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DashboardLayout role="ADMIN">
            <div className="page-container">
                <div className="page-header">
                    <div>
                        <h1>Utilisateurs</h1>
                        <p>Gérez les comptes administrateurs, PME et freelancers.</p>
                    </div>

                    <button className="dashboard-primary-button" onClick={() => navigate("/admin/users/new")}>
                        Ajouter un utilisateur
                    </button>
                </div>

                <div className="role-filters">
                    {FILTERS.map((f) => (
                        <button
                            key={f.value}
                            className={`role-filter ${roleFilter === f.value ? "active" : ""}`}
                            onClick={() => changeFilter(f.value)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {loading && <p>Chargement...</p>}

                {!loading && users.length === 0 && (
                    <div className="empty-state">Aucun utilisateur trouvé.</div>
                )}

                {!loading && users.length > 0 && (
                    <div className="dashboard-card projects-card">
                        <div className="project-list">
                            {users.map((u) => {
                                const badge = ROLE_BADGE[u.role];
                                const isMe = u.email === myEmail;

                                return (
                                    <div className="project-row" key={u.id}>
                                        <div>
                                            <strong>{u.nom}{isMe && " (vous)"}</strong>
                                            <span>{u.email}</span>
                                        </div>

                                        <span className={`status ${badge.className}`}>{badge.text}</span>

                                        <div className="row-actions">
                                            <button
                                                className="small-button"
                                                onClick={() => navigate(isMe ? "/profile" : `/admin/users/${u.id}/edit`)}
                                            >
                                                Modifier
                                            </button>
                                            {!isMe && (
                                                <button className="small-button btn-danger" onClick={() => handleDelete(u)}>
                                                    Supprimer
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </DashboardLayout>
    );
}

export default UsersList;