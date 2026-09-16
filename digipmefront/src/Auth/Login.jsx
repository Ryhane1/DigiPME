import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { Mail, Lock, LogIn } from "lucide-react";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", formData);
      const token = response.data.token;

      const decoded = jwtDecode(token);
      const role = decoded.role[0].authority.replace("ROLE_", "");

      localStorage.setItem("token", token);
      localStorage.setItem("nom", decoded.sub);
      localStorage.setItem("role", role);

      navigate("/dashboard");
    } catch (err) {
      setError("Email ou mot de passe incorrect.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="auth-page">
        <div className="auth-container login-container">
          <div className="auth-header">
            <div className="auth-icon">
              <LogIn size={30} />
            </div>
            <h1>Bienvenue sur DigiPME</h1>
            <p>Connectez-vous à votre compte pour accéder à votre espace.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <p className="auth-error">{error}</p>}

            <div className="form-group">
              <label>Email</label>
              <div className="input-icon">
                <Mail size={18} />
                <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

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

            <div className="forgot-password">
              <a href="/forgot-password">Mot de passe oublié ?</a>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              <LogIn size={18} />
              {loading ? "Connexion..." : "Se connecter"}
            </button>

            <p className="auth-footer">Vous n'avez pas encore de compte ?</p>

            <div className="register-links">
              <a href="/register/pme">Créer un compte PME</a>
              <a href="/register/freelance">Créer un compte Freelance</a>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;