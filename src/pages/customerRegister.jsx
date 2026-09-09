import { useState } from "react";
import {
  ArrowLeft,
  UserRound,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Home,
} from "lucide-react";

function CustomerRegister({ language = "en", onBack, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (formData.phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!formData.password) {
      setError("Please create a password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (onRegister) {
      onRegister(formData);
    }
  };

  return (
    <div className="register-page">

      {/* TOP BAR */}
      <header className="register-topbar">
        <button
          className="register-back-button"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="register-brand">
          <div className="register-brand-icon">
            <Home size={19} />
          </div>

          <div>
            <strong>HOMELY</strong>
            <span>Help That Feels Like Home.</span>
          </div>
        </div>
      </header>

      {/* FORM */}
      <main className="register-container">

        <div className="register-heading">
          <h1>Create your account</h1>

          <p>
            Join HOMELY and find trusted help for your home.
          </p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <div className="register-field">
            <label htmlFor="name">
              Full name
            </label>

            <div className="register-input">
              <UserRound size={19} />

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="register-field">
            <label htmlFor="phone">
              Phone number
            </label>

            <div className="register-input">
              <Phone size={19} />

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="register-field">
            <label htmlFor="email">
              Email
              <span className="optional-text">
                Optional
              </span>
            </label>

            <div className="register-input">
              <Mail size={19} />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="register-field">
            <label htmlFor="password">
              Password
            </label>

            <div className="register-input">
              <Lock size={19} />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="register-field">
            <label htmlFor="confirmPassword">
              Confirm password
            </label>

            <div className="register-input">
              <Lock size={19} />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <div className="register-error">
              {error}
            </div>
          )}

          {/* SUBMIT */}
          <button
            className="register-submit"
            type="submit"
          >
            Create Account
          </button>

        </form>

        {/* LOGIN */}
        <div className="register-login">
          <span>Already have an account?</span>

          <button
            type="button"
            onClick={onBack}
          >
            Log in
          </button>
        </div>

      </main>
    </div>
  );
}

export default CustomerRegister;