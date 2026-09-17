// src/Reviews/ReviewForm.jsx
import { useState, useEffect } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";
import StarRating from "./StarRating";

function ReviewForm({ projectId }) {
    const [freelancer, setFreelancer] = useState(null);
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState("");
    const [saving, setSaving] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api
            .get(`/api/pme/projects/${projectId}/offers?page=0&size=50`)
            .then((res) => {
                const accepted = res.data.content.find((o) => o.status === "ACCEPTEE");
                if (accepted) setFreelancer({ id: accepted.freelancerId });
            })
            .finally(() => setLoading(false));
    }, [projectId]);

    if (loading) return null;
    if (!freelancer) return null; // pas d'offre acceptée -> rien à évaluer
    if (submitted) {
        return (
            <div className="dashboard-card" style={{ marginTop: 20 }}>
                <p>Merci, votre évaluation a été enregistrée.</p>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (note === 0) {
            toast.error("Merci de sélectionner une note.");
            return;
        }
        setSaving(true);
        try {
            await api.post("/api/reviews", {
                note,
                commentaire,
                projectId: Number(projectId),
                freelancerId: freelancer.id,
            });
            toast.success("Évaluation envoyée.");
            setSubmitted(true);
        } catch (err) {
            toast.error(err.response?.data?.message || "Impossible d'envoyer l'évaluation.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="dashboard-card" style={{ marginTop: 20 }}>
            <div className="dashboard-card-header">
                <div>
                    <h2>Évaluer le freelancer</h2>
                    <p>Votre avis aide les autres PME à choisir un prestataire.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label>Note</label>
                    <StarRating value={note} onChange={setNote} />
                </div>

                <div className="form-group">
                    <label>Commentaire</label>
                    <textarea
                        className="form-textarea"
                        rows={4}
                        value={commentaire}
                        onChange={(e) => setCommentaire(e.target.value)}
                        placeholder="Décrivez votre expérience avec ce prestataire..."
                        required
                    />
                </div>

                <button type="submit" className="auth-button" disabled={saving}>
                    {saving ? "Envoi..." : "Envoyer l'évaluation"}
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;