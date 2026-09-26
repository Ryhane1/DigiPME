import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "../Auth/Auth.css";
import "../Dashboard/Dashboard.css";
import "../Projects/Projects.css";
import "../Profile/Profile.css";
import "./Admin.css";

const ROLES = [
    { value: "ADMIN", label: "Administrateur" },
    { value: "PME", label: "PME" },
    { value: "FREELANCER", label: "Freelancer" },
];

const INITIAL = {
    nom: "", email: "", password: "", telephone: "", adresse: "",
    role: "PME", rc: "", activite: "", specialite: "",
};

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [form, setForm] = useState(INITIAL);
    const [loading, setLoading] = useState(isEditing);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isEditing) return;

        api
            .get(`/api/users/${id}`)
            .then((res) => {
                const u = res.data;
                setForm({
                    nom: u.nom || "",
                    email: u.email || "",
                    password: "",
                    telephone: u.telephone || "",
                    adresse: u.adresse || "",
                    role: u.role,
                    rc: u.rc || "",
                    activite: u.activite || "",
                    specialite: u.specialite || "",
                });
            })
            .catch(() => setError("Impossible de charger cet utilisateur."))
            .finally(() => setLoading(false));
    }, [id, isEditing]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSaving(true);

        const payload = {
            nom: form.nom,
            email: form.email,
            telephone: form.telephone,
            adresse: form.adresse,
            ...(form.password && { password: form.password }),
            ...(form.role === "PME" && { rc: form.rc, activite: form.activite }),
            ...(form.role === "FREELANCER" && { specialite: form.specialite }),
        };

        try {
            if (isEditing) {
                await api.put(`/api/users/${id}`, payload);
                toast.success("Utilisateur modifié.");
            } else {
                await api.post("/api/users", { ...payload, role: form.role });
                toast.success("Utilisateur créé.");
            }
            navigate("/admin/users");
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de l'enregistrement.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout role="ADMIN">
                <p>Chargement...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout role="ADMIN">
            <div className="page-container">
                <div className="page-header">
                    <div>
                        <h1>{isEditing ? "Modifier l'utilisateur" : "Nouvel utilisateur"}</h1>
                        <p>
                            {isEditing
                                ? "Le rôle ne peut pas être modifié après la création."
                                : "Créez un compte administrateur, PME ou freelancer."}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: 600 }}>
                    {error && <p className="auth-error">{error}</p>}

                    <div className="form-group">
                        <label>Rôle</label>
                        <select
                            name="role"
                            className="form-select"
                            value={form.role}
                            onChange={handleChange}
                            disabled={isEditing}
                        >
                            {ROLES.map((r) => (
                                <option key={r.value} value={r.value}>{r.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>{form.role === "PME" ? "Nom de l'entreprise" : "Nom complet"}</label>
                        <input className="form-input" name="nom" value={form.nom} onChange={handleChange} required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Téléphone</label>
                            <input className="form-input" type="tel" name="telephone" value={form.telephone} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Adresse / Ville</label>
                        <input className="form-input" name="adresse" value={form.adresse} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            minLength={4}
                            value={form.password}
                            onChange={handleChange}
                            required={!isEditing}
                            placeholder={isEditing ? "Laisser vide pour ne pas le changer" : "••••••••"}
                        />
                    </div>

                    {form.role === "PME" && (
                        <>
                            <div className="form-group">
                                <label>Registre de commerce</label>
                                <input className="form-input" name="rc" value={form.rc} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Activité</label>
                                <input className="form-input" name="activite" value={form.activite} onChange={handleChange} required />
                            </div>
                        </>
                    )}

                    {form.role === "FREELANCER" && (
                        <div className="form-group">
                            <label>Spécialité</label>
                            <input className="form-input" name="specialite" value={form.specialite} onChange={handleChange} required />
                        </div>
                    )}

                    <div className="profile-actions">
                        <button type="submit" className="auth-button" disabled={saving}>
                            {saving ? "Enregistrement..." : isEditing ? "Enregistrer" : "Créer l'utilisateur"}
                        </button>
                        <button type="button" className="small-button" onClick={() => navigate("/admin/users")}>
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
}

export default UserForm;