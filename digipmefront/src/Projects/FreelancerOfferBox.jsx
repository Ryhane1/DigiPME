// nouveau fichier: src/Projects/FreelancerOfferBox.jsx
import { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

function FreelancerOfferBox({ projectId }) {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({ description: "", prixProposer: "", dateLivraison: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await api.post("/api/offers", {
                description: form.description,
                prixProposer: parseFloat(form.prixProposer),
                dateLivraison: form.dateLivraison,
                projectId: Number(projectId),
            });
            toast.success("Votre offre a été envoyée.");
            setOpen(false);
            setForm({ description: "", prixProposer: "", dateLivraison: "" });
        } catch (err) {
            toast.error(err.response?.data?.message || "Erreur lors de l'envoi de l'offre.");
        } finally {
            setSaving(false);
        }
    };

    if (!open) {
        return (
            <div className="project-details-actions">
                <button className="dashboard-primary-button" onClick={() => setOpen(true)}>
                    Proposer une offre
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: 20 }}>
            <div className="form-group">
                <label>Description de votre offre</label>
                <textarea
                    className="form-textarea"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Prix proposé (DH)</label>
                    <input
                        className="form-input"
                        type="number"
                        min="0"
                        step="0.01"
                        name="prixProposer"
                        value={form.prixProposer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date de livraison</label>
                    <input
                        className="form-input"
                        type="date"
                        name="dateLivraison"
                        value={form.dateLivraison}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
                <button type="submit" className="auth-button" disabled={saving}>
                    {saving ? "Envoi..." : "Envoyer l'offre"}
                </button>
                <button type="button" className="small-button" onClick={() => setOpen(false)}>
                    Annuler
                </button>
            </div>
        </form>
    );
}

export default FreelancerOfferBox;