import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { Code2, Mail, Lock, User, Phone, MapPin, Briefcase } from "lucide-react";
import "./Auth.css";

function RegisterFreelance() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    specialite: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        nom: formData.nom,
        email: formData.email,
        password: formData.password,
        telephone: formData.telephone,
        adresse: formData.ville,
        role: "FREELANCER",
        specialite: formData.specialite,
      };

      const response = await api.post("/auth/register", payload);
      const token = response.data.token;

      const decoded = jwtDecode(token);
      const role = decoded.role[0].authority.replace("ROLE_", "");

      localStorage.setItem("token", token);
      localStorage.setItem("nom", decoded.sub);
      localStorage.setItem("role", role);

      navigate("/dashboard");
    } catch (err) {
      setError(
          err.response?.data?.message || "Erreur lors de la création du compte."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-icon green">
              <Code2 size={30} />
            </div>
            <h1>Créer un compte Freelance</h1>
            <p>Présentez vos compétences et trouvez de nouveaux projets.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <p className="auth-error">{error}</p>}

            <div className="form-group">
              <label>Nom complet</label>
              <div className="input-icon">
                <User size={18} />
                <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom complet"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <div className="input-icon">
                  <Mail size={18} />
                  <input
                      type="email"
                      name="email"
                      placeholder="freelance@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <div className="input-icon">
                  <Phone size={18} />
                  <input
                      type="tel"
                      name="telephone"
                      placeholder="06XXXXXXXX"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Ville</label>
              <div className="input-icon">
                <MapPin size={18} />
                <input
                    type="text"
                    name="ville"
                    placeholder="Ex: Casablanca"
                    value={formData.ville}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Spécialité</label>
              <div className="input-icon">
                <Briefcase size={18} />
                <input
                    type="text"
                    name="specialite"
                    placeholder="Ex: Développement Web"
                    value={formData.specialite}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-icon">
                  <Lock size={18} />
                  <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Confirmer le mot de passe</label>
                <div className="input-icon">
                  <Lock size={18} />
                  <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="auth-button green-button" disabled={loading}>
              {loading ? "Création..." : "Créer mon compte Freelance"}
            </button>

            <p className="auth-footer">
              Vous avez déjà un compte ? <a href="/login">Se connecter</a>
            </p>
          </form>
        </div>
      </div>
  );
}

export default RegisterFreelance;