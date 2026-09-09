import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  HardHat,
  ShieldCheck,
} from "lucide-react";

import translations from "../translations";
import "../App.css";

function RoleSelection({ language = "en", onBack, onSelectRole }) {
  // Get translations for the selected language
  const t = translations[language] || translations.en;

  const roles = [
    {
      id: "customer",
      icon: UserRound,
      title: t.customer,
      description: t.customerDesc,
    },
    {
      id: "worker",
      icon: HardHat,
      title: t.worker,
      description: t.workerDesc,
    },
    {
      id: "admin",
      icon: ShieldCheck,
      title: t.admin,
      description: t.adminDesc,
    },
  ];

  return (
    <div className="role-page">
      {/* Decorative circles */}
      <div className="role-circle role-circle-one"></div>
      <div className="role-circle role-circle-two"></div>

      {/* Top bar */}
      <div className="role-topbar">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>

        <div className="mini-logo">
          <div className="mini-logo-icon">🏠</div>
          <span>HOMELY</span>
        </div>

        <div className="step-number">2 / 3</div>
      </div>

      {/* Main content */}
      <main className="role-content">
        <div className="role-heading-icon">👋</div>

        <h1>{t.roleTitle}</h1>

        <p>{t.roleSubtitle}</p>

        {/* Role cards */}
        <div className="role-grid">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <button
                key={role.id}
                className="role-card"
                onClick={() => onSelectRole(role.id)}
              >
                <div className={`role-icon ${role.id}`}>
                  <Icon size={30} strokeWidth={2} />
                </div>

                <div className="role-text">
                  <h2>{role.title}</h2>
                  <p>{role.description}</p>
                </div>

                <div className="role-arrow">
                  <ArrowRight size={19} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="role-help">
          You can change your role by returning to this screen.
        </div>
      </main>
    </div>
  );
}

export default RoleSelection;