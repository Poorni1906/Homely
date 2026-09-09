import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

import translations from "../translations";
import "../App.css";

function CustomerLogin({ language = "en", onBack, onLogin,onCreateAccount }) {
  const t = translations[language] || translations.en;

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (phone && password) {
      onLogin();
    }
  };

  return (
    <div className="customer-login-page">

      {/* Top bar */}
      <div className="login-topbar">

        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>

        <div className="mini-logo">
          <div className="mini-logo-icon">🏠</div>
          <span>HOMELY</span>
        </div>

        <div className="login-step">
          3 / 3
        </div>

      </div>


      {/* Login content */}
      <main className="customer-login-content">

        <div className="login-welcome-icon">
          👋
        </div>

        <h1>{t.welcome}</h1>

        <p className="login-subtitle">
          {t.loginSubtitle}
        </p>


        <div className="customer-login-card">

          <form onSubmit={handleLogin}>

            {/* Mobile number */}
            <div className="login-field">

              <label>
                {t.mobile}
              </label>

              <div className="login-input-wrapper">

                <span className="phone-prefix">
                  +91
                </span>

                <input
                  type="tel"
                  placeholder={t.mobilePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

              </div>

            </div>


            {/* Password */}
            <div className="login-field">

              <div className="password-label-row">

                <label>
                  {t.password}
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Forgot password feature coming soon")
                  }
                >
                  {t.forgotPassword}
                </button>

              </div>


              <div className="login-input-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>


            {/* Login button */}
            <button
              type="submit"
              className="login-button"
            >
              {t.login}
              <ArrowRight size={20} />
            </button>


            {/* Security message */}
            <div className="login-security">

              <ShieldCheck size={18} />

              <span>
                {t.safe}
              </span>

            </div>

          </form>


          {/* Create account */}
          <div className="create-account">

            <span>
              {t.noAccount}
            </span>

            <button
              type="button"
              onClick={() =>{
                  onCreateAccount();
                }
              }
            >
              {t.createAccount}
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CustomerLogin;