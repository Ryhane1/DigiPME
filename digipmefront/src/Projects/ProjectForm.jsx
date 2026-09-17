import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { ACTIVITE_TYPES } from "./activiteTypes";
import "../Auth/Auth.css";
import "./Projects.css";

function ProjectForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const role = localStorage.getItem("role");

    const [formData, setFormData] = useState({
        titre: "",
        type: "",
        description: "",
        prix: "",
        date: "",
    });

    const [loading, setLoading] = useState(isEditing);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isEditing) return;

        api
            .get(`/api/projects/${id}`)
            .then((res) => {
                const project = res.data;
                setFormData({
                    titre: project.titre || "",
                    type: project.type || "",
                    description: project.description || "",
                    prix: project.prix ?? "",
                    date: project.date || "",
                });
            })
            .catch((err) => {
                console.error(err);
                setError("Impossible de charger ce projet.");
            })
            .finally(() => setLoading(false));
    }, [id, isEditing]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSaving(true);

        const payload = { ...formData, prix: parseFloat(formData.prix) };

        try {
            if (isEditing) {
                await api.put(`/api/projects/${id}`, payload);
                navigate(`/projects/${id}`);
            } else {
                const res = await api.post("/api/projects", payload);
                navigate(`/projects/${res.data.id}`);
            }
        } catch (err) {
            setError(
                err.response?.data?.message || "Erreur lors de l'enregistrement du projet."
            );
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    if (role !== "PME") {
        return (
            <DashboardLayout role={role}>
                <p>Seule une PME peut créer ou modifier un projet.</p>
            </DashboardLayout>
        );
    }

    if (loading) {
        return (
            <DashboardLayout role={role}>
                <p>Chargement...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout role={role}>
            <div className="page-container">

                <div className="page-header">
                    <div>
                        <h1>{isEditing ? "Modifier le projet" : "Nouveau projet"}</h1>
                        <p>
                            {isEditing
                                ? "Mettez à jour les informations de votre projet."
                                : "Décrivez votre besoin pour trouver le bon prestataire."}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: 600 }}>

                    {error && <p className="auth-error">{error}</p>}

                    <div className="form-group">
                        <label>Titre du projet</label>
                        <input
                            type="text"
                            name="titre"
                            className="form-input"
                            placeholder="Ex: Création d'un site e-commerce"
                            value={formData.titre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Type d'activité</label>
                        <select
                            name="type"
                            className="form-select"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez un type</option>
                            {ACTIVITE_TYPES.map((t) => (
                                <option key={t.value} value={t.value}>
                                    {t.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            className="form-textarea"
                            placeholder="Décrivez votre projet en détail..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Budget (DH)</label>
                            <input
                                type="number"
                                name="prix"
                                className="form-input"
                                min="0"
                                step="0.01"
                                placeholder="Ex: 8000"
                                value={formData.prix}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Date souhaitée</label>
                            <input
                                type="date"
                                name="date"
                                className="form-input"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="auth-button" disabled={saving}>
                        {saving ? "Enregistrement..." : isEditing ? "Enregistrer" : "Publier le projet"}
                    </button>

                </form>

            </div>
        </DashboardLayout>
    );
}

export default ProjectForm;