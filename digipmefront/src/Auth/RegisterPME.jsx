import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { Building2, Mail, Lock, Phone, MapPin, Building } from "lucide-react";
import "./Auth.css";

function RegisterPME() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomEntreprise: "",
    email: "",
    telephone: "",
    ville: "",
    rc: "",
    activite: "",
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
        nom: formData.nomEntreprise,
        email: formData.email,
        password: formData.password,
        telephone: formData.telephone,
        adresse: formData.ville,
        role: "PME",
        RC: formData.rc,
        activite: formData.activite,
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
            <div className="auth-icon blue">
              <Building2 size={30} />
            </div>
            <h1>Créer un compte PME</h1>
            <p>Rejoignez DigiPME et commencez votre transformation digitale.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <p className="auth-error">{error}</p>}

            <div className="form-group">
              <label>Nom de l'entreprise</label>
              <div className="input-icon">
                <Building2 size={18} />
                <input
                    type="text"
                    name="nomEntreprise"
                    placeholder="Ex: Digital Maroc SARL"
                    value={formData.nomEntreprise}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Activité de l'entreprise</label>
              <div className="input-icon">
                <Building size={18} />
                <input
                    type="text"
                    name="activite"
                    placeholder="Ex: Développement de logiciels"
                    value={formData.activite}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Registre de commerce</label>
              <div className="input-icon">
                <Building2 size={18} />
                <input
                    type="text"
                    name="rc"
                    placeholder="Numéro de registre de commerce"
                    value={formData.rc}
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
                      placeholder="contact@entreprise.ma"
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
                    placeholder="Ex: Beni Mellal"
                    value={formData.ville}
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

            <button type="submit" className="auth-button blue-button" disabled={loading}>
              {loading ? "Création..." : "Créer mon compte PME"}
            </button>

            <p className="auth-footer">
              Vous avez déjà un compte ? <a href="/login">Se connecter</a>
            </p>
          </form>
        </div>
      </div>
  );
}

export default RegisterPME;