import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { Pencil } from "lucide-react";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "../Auth/Auth.css";
import "../Dashboard/Dashboard.css";
import "../Projects/Projects.css";
import "./Profile.css";

const ROLE_LABELS = { ADMIN: "Administrateur", PME: "PME", FREELANCER: "Freelancer" };

const toForm = (u) => ({
    nom: u.nom || "",
    email: u.email || "",
    telephone: u.telephone || "",
    adresse: u.adresse || "",
    rc: u.rc || "",
    activite: u.activite || "",
    specialite: u.specialite || "",
});

function Profile() {
    const layoutRole = localStorage.getItem("role");

    const [user, setUser] = useState(null);
    const [form, setForm] = useState(toForm({}));
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        api
            .get("/api/users/me")
            .then((res) => {
                setUser(res.data);
                setForm(toForm(res.data));
                console.log(res.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleCancel = () => {
        setForm(toForm(user));
        setError("");
        setEditing(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSaving(true);

        console.log(form);
        console.log("Hello")

        const payload = {
            nom: form.nom,
            email: form.email,
            telephone: form.telephone,
            adresse: form.adresse,
            ...(user.role === "PME" && { rc: form.rc, activite: form.activite }),
            ...(user.role === "FREELANCER" && { specialite: form.specialite }),
        };

        try {
            const res = await api.put("/api/users/me", payload);
            const { user: updated, token } = res.data;

            // L'email a changé → le backend renvoie un nouveau token
            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("nom", jwtDecode(token).sub);
            }

            setUser(updated);
            setForm(toForm(updated));
            setEditing(false);
            toast.success("Profil mis à jour.");
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de la mise à jour du profil.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout role={layoutRole}>
                <p>Chargement...</p>
            </DashboardLayout>
        );
    }

    if (!user) {
        return (
            <DashboardLayout role={layoutRole}>
                <div className="empty-state">Impossible de charger votre profil.</div>
            </DashboardLayout>
        );
    }

    const field = (label, name, extra = {}) => (
        <div className="form-group">
            <label>{label}</label>
            <input
                className="form-input"
                name={name}
                value={form[name]}
                onChange={handleChange}
                disabled={!editing}
                {...extra}
            />
        </div>
    );

    return (
        <DashboardLayout role={layoutRole}>
            <div className="page-container">
                <div className="page-header">
                    <div>
                        <h1>Mon profil</h1>
                        <p>Consultez et modifiez vos informations personnelles.</p>
                    </div>

                    {!editing && (
                        <button className="dashboard-primary-button" onClick={() => setEditing(true)}>
                            <Pencil size={16} />
                            Modifier
                        </button>
                    )}
                </div>

                <div className="profile-card">
                    <div className="profile-identity">
                        <div className="profile-avatar">{user.nom?.charAt(0).toUpperCase()}</div>
                        <div>
                            <h2>{user.nom}</h2>
                            <span>
                                {ROLE_LABELS[user.role]}
                                {user.role === "FREELANCER" && user.noteMoyenne
                                    ? ` · ★ ${user.noteMoyenne.toFixed(1)}`
                                    : ""}
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {error && <p className="auth-error">{error}</p>}

                        {field(user.role === "PME" ? "Nom de l'entreprise" : "Nom complet", "nom", { required: true })}

                        <div className="form-row">
                            {field("Email", "email", { type: "email", required: true })}
                            {field("Téléphone", "telephone", { type: "tel", required: true })}
                        </div>

                        {field("Adresse / Ville", "adresse")}

                        {user.role === "PME" && (
                            <>
                                {field("Registre de commerce", "rc", { required: true })}
                                {field("Activité", "activite", { required: true })}
                            </>
                        )}

                        {user.role === "FREELANCER" &&
                            field("Spécialité", "specialite", { required: true })}

                        {editing && (
                            <div className="profile-actions">
                                <button type="submit" className="auth-button" disabled={saving}>
                                    {saving ? "Enregistrement..." : "Enregistrer"}
                                </button>
                                <button type="button" className="small-button" onClick={handleCancel}>
                                    Annuler
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Profile;