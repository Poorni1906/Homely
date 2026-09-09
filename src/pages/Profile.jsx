import {
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Bell,
  Heart,
  ShieldCheck,
  Globe,
  LogOut,
  ChevronRight,
} from "lucide-react";

function Profile({ language, onBackHome, onLogout }) {
  const savedLocation =
    localStorage.getItem("homely-location") ||
    "Location not set";

  const customerName =
    localStorage.getItem("homely-customer-name") ||
    "HOMELY Customer";

  const customerPhone =
    localStorage.getItem("homely-customer-phone") ||
    "Phone number not added";

  const customerEmail =
    localStorage.getItem("homely-customer-email") ||
    "Email not added";

  return (
    <div className="profile-page">

      {/* TOP BAR */}
      <header className="profile-topbar">

        <button
          type="button"
          className="back-button"
          onClick={onBackHome}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1>My Profile</h1>
          <span>Manage your HOMELY account</span>
        </div>

      </header>


      {/* MAIN CONTENT */}
      <main className="profile-content">

        {/* PROFILE HEADER */}
        <section className="profile-card">

          <div className="profile-avatar">
            <UserRound size={38} />
          </div>

          <div className="profile-main-info">

            <h2>{customerName}</h2>

            <p>HOMELY Customer</p>

          </div>

          <button
            type="button"
            className="profile-edit-button"
          >
            <Pencil size={17} />
            <span>Edit</span>
          </button>

        </section>


        {/* PERSONAL INFORMATION */}
        <section className="profile-section">

          <div className="profile-section-heading">

            <h2>Personal Information</h2>

            <span>Your account details</span>

          </div>


          <div className="profile-info-list">

            <div className="profile-info-item">

              <div className="profile-info-icon">
                <UserRound size={18} />
              </div>

              <div>
                <span>Name</span>
                <strong>{customerName}</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>Phone</span>
                <strong>{customerPhone}</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>Email</span>
                <strong>{customerEmail}</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Service Location</span>
                <strong>{savedLocation}</strong>
              </div>

            </div>

          </div>

        </section>


        {/* SETTINGS */}
        <section className="profile-section">

          <div className="profile-section-heading">

            <h2>Account Settings</h2>

            <span>Customize your HOMELY experience</span>

          </div>


          <div className="profile-settings-list">

            <button
              type="button"
              className="profile-setting-item"
            >
              <div className="profile-setting-left">

                <div className="profile-setting-icon">
                  <Bell size={18} />
                </div>

                <div>
                  <strong>Notifications</strong>
                  <span>Manage service updates and alerts</span>
                </div>

              </div>

              <ChevronRight size={18} />

            </button>


            <button
              type="button"
              className="profile-setting-item"
            >
              <div className="profile-setting-left">

                <div className="profile-setting-icon">
                  <Heart size={18} />
                </div>

                <div>
                  <strong>Favorites</strong>
                  <span>Your saved services and workers</span>
                </div>

              </div>

              <ChevronRight size={18} />

            </button>


            <button
              type="button"
              className="profile-setting-item"
            >
              <div className="profile-setting-left">

                <div className="profile-setting-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <strong>Privacy & Security</strong>
                  <span>Manage your account security</span>
                </div>

              </div>

              <ChevronRight size={18} />

            </button>


            <button
              type="button"
              className="profile-setting-item"
            >
              <div className="profile-setting-left">

                <div className="profile-setting-icon">
                  <Globe size={18} />
                </div>

                <div>
                  <strong>Language</strong>
                  <span>{language === "en" ? "English" : language}</span>
                </div>

              </div>

              <ChevronRight size={18} />

            </button>

          </div>

        </section>


        {/* LOGOUT */}
        <button
          type="button"
          className="profile-logout-button"
          onClick={onLogout}
        >
          <LogOut size={18} />
          Logout
        </button>

      </main>

    </div>
  );
}

export default Profile;