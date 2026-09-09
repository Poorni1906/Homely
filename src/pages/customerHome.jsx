import { useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Bell,
  ChevronRight,
  Sparkles,
  Wrench,
  Droplets,
  Zap,
  Heart,
  Home,
  CalendarDays,
  UserRound,
  Star,
  ShieldCheck,
  Bot,
} from "lucide-react";
import services from "../data/services";

function CustomerHome({
  language = "en",
  onSelectCategory,
  onOpenAI,
  onOpenBookings,
  onOpenProfile,
  onOpenFavorites,
}) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(
    localStorage.getItem("homely_location") || ""
  );
  const [locationLoading, setLocationLoading] = useState(false);
const handleGetLocation = () => {
  if (!navigator.geolocation) {
    setLocation("Location not supported");
    return;
  }

  setLocationLoading(true);

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
        );

        const data = await response.json();

        const address = data.address;

        const place =
          address.city ||
          address.town ||
          address.village ||
          address.suburb ||
          "Location found";

        const state = address.state || "";

        setLocation(
          state ? `${place}, ${state}` : place
        );
        localStorage.setItem(
  "homely-location",
  state ? `${place}, ${state}` : place
);
      } catch (error) {
        console.error("Location lookup failed:", error);

        setLocation(
          `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
        );
      }

      setLocationLoading(false);
    },
    () => {
      setLocation("Unable to get location");
      setLocationLoading(false);
    }
  );
};
useEffect(() => {
  handleGetLocation();
}, []);
  const translations = {
    en: {
      hello: "Hello! 👋",
      subtitle: "What can we help you with today?",
      search: "Search for a service...",
      popular: "Popular Services",
      seeAll: "See all",
      cleaning: "Home Cleaning",
      plumbing: "Plumbing",
      electrical: "Electrical",
      repair: "Appliance Repair",
      recommended: "Recommended for you",
      verified: "Verified Worker",
      available: "Available today",
      home: "Home",
      bookings: "Bookings",
      favorites: "Favorites",
      profile: "Profile",
      location: "Your location",
      rating: "4.9",
      reviews: "120+ reviews",
    },

    hi: {
      hello: "नमस्ते! 👋",
      subtitle: "आज हम आपकी किस तरह मदद कर सकते हैं?",
      search: "सेवा खोजें...",
      popular: "लोकप्रिय सेवाएँ",
      seeAll: "सभी देखें",
      cleaning: "घर की सफाई",
      plumbing: "प्लंबिंग",
      electrical: "इलेक्ट्रिकल",
      repair: "उपकरण मरम्मत",
      recommended: "आपके लिए सुझाव",
      verified: "सत्यापित कर्मचारी",
      available: "आज उपलब्ध",
      home: "होम",
      bookings: "बुकिंग",
      favorites: "पसंदीदा",
      profile: "प्रोफ़ाइल",
      location: "आपका स्थान",
      rating: "4.9",
      reviews: "120+ समीक्षाएँ",
    },

    ta: {
      hello: "வணக்கம்! 👋",
      subtitle: "இன்று நாங்கள் உங்களுக்கு எப்படி உதவலாம்?",
      search: "சேவையைத் தேடுங்கள்...",
      popular: "பிரபலமான சேவைகள்",
      seeAll: "அனைத்தையும் பார்க்க",
      cleaning: "வீட்டு சுத்தம்",
      plumbing: "பிளம்பிங்",
      electrical: "மின்சார சேவை",
      repair: "சாதன பழுது",
      recommended: "உங்களுக்கான பரிந்துரைகள்",
      verified: "சரிபார்க்கப்பட்ட பணியாளர்",
      available: "இன்று கிடைக்கும்",
      home: "முகப்பு",
      bookings: "முன்பதிவுகள்",
      favorites: "விருப்பங்கள்",
      profile: "சுயவிவரம்",
      location: "உங்கள் இடம்",
      rating: "4.9",
      reviews: "120+ மதிப்பீடுகள்",
    },

    te: {
      hello: "నమస్కారం! 👋",
      subtitle: "ఈ రోజు మేము మీకు ఎలా సహాయం చేయగలం?",
      search: "సేవ కోసం వెతకండి...",
      popular: "ప్రసిద్ధ సేవలు",
      seeAll: "అన్నీ చూడండి",
      cleaning: "ఇంటి శుభ్రత",
      plumbing: "ప్లంబింగ్",
      electrical: "ఎలక్ట్రికల్",
      repair: "ఉపకరణాల మరమ్మత్తు",
      recommended: "మీ కోసం సిఫార్సులు",
      verified: "ధృవీకరించబడిన కార్మికుడు",
      available: "ఈరోజు అందుబాటులో ఉంది",
      home: "హోమ్",
      bookings: "బుకింగ్స్",
      favorites: "ఇష్టమైనవి",
      profile: "ప్రొఫైల్",
      location: "మీ స్థానం",
      rating: "4.9",
      reviews: "120+ సమీక్షలు",
    },

    kn: {
      hello: "ನಮಸ್ಕಾರ! 👋",
      subtitle: "ಇಂದು ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      search: "ಸೇವೆಯನ್ನು ಹುಡುಕಿ...",
      popular: "ಜನಪ್ರಿಯ ಸೇವೆಗಳು",
      seeAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
      cleaning: "ಮನೆ ಸ್ವಚ್ಛತೆ",
      plumbing: "ಪ್ಲಂಬಿಂಗ್",
      electrical: "ಎಲೆಕ್ಟ್ರಿಕಲ್",
      repair: "ಉಪಕರಣ ದುರಸ್ತಿ",
      recommended: "ನಿಮಗಾಗಿ ಶಿಫಾರಸುಗಳು",
      verified: "ಪರಿಶೀಲಿಸಿದ ಕೆಲಸಗಾರ",
      available: "ಇಂದು ಲಭ್ಯವಿದೆ",
      home: "ಮುಖಪುಟ",
      bookings: "ಬುಕಿಂಗ್",
      favorites: "ಮೆಚ್ಚಿನವು",
      profile: "ಪ್ರೊಫೈಲ್",
      location: "ನಿಮ್ಮ ಸ್ಥಳ",
      rating: "4.9",
      reviews: "120+ ವಿಮರ್ಶೆಗಳು",
    },

    ml: {
      hello: "നമസ്കാരം! 👋",
      subtitle: "ഇന്ന് ഞങ്ങൾ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?",
      search: "സേവനം തിരയുക...",
      popular: "ജനപ്രിയ സേവനങ്ങൾ",
      seeAll: "എല്ലാം കാണുക",
      cleaning: "വീട് വൃത്തിയാക്കൽ",
      plumbing: "പ്ലംബിംഗ്",
      electrical: "ഇലക്ട്രിക്കൽ",
      repair: "ഉപകരണ അറ്റകുറ്റപ്പണി",
      recommended: "നിങ്ങൾക്കുള്ള ശുപാർശകൾ",
      verified: "പരിശോധിച്ച തൊഴിലാളി",
      available: "ഇന്ന് ലഭ്യമാണ്",
      home: "ഹോം",
      bookings: "ബുക്കിംഗുകൾ",
      favorites: "പ്രിയപ്പെട്ടവ",
      profile: "പ്രൊഫൈൽ",
      location: "നിങ്ങളുടെ സ്ഥാനം",
      rating: "4.9",
      reviews: "120+ അവലോകനങ്ങൾ",
    },
  };

  const t = translations[language] || translations.en;


  return (
    <div className="customer-home-page">

      {/* TOP BAR */}
      <header className="customer-home-topbar">

        <div className="home-logo">
          <div className="home-logo-icon">
            <Home size={21} />
          </div>

          <div>
            <strong>HOMELY</strong>
            <span>Help That Feels Like Home.</span>
          </div>
        </div>

        <div className="home-top-actions">

        <button
  className="location-button"
  type="button"
  onClick={handleGetLocation}
>
  <MapPin size={17} />
  <span>{locationLoading
  ?"Getting location...": location || t.location}</span>
</button>

          <button className="notification-button">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

        </div>

      </header>


      {/* MAIN */}
      <main className="customer-home-content">

        {/* GREETING */}
        <section className="home-greeting">

          <div>
            <p className="greeting-small">HOMELY</p>

            <h1>{t.hello}</h1>

            <p className="greeting-subtitle">
              {t.subtitle}
            </p>
          </div>

          <div className="greeting-decoration">
            <Sparkles size={30} />
          </div>

        </section>


        {/* SEARCH */}
        <div className="home-search">

          <Search size={21} />

          <input
            type="text"
            placeholder={t.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
 

        {/* SERVICES */}
        <section className="home-section">

          <div className="section-heading">

            <h2>{t.popular}</h2>

            <button className="see-all-button">
              {t.seeAll}
              <ChevronRight size={16} />
            </button>

          </div>
          <button
  className="ai-home-card"
  onClick={onOpenAI}
>
  <div className="ai-home-icon">
    <Bot size={25} />
  </div>

  <div className="ai-home-text">
    <strong>Ask HOMELY AI</strong>
    <span>
      Not sure which service you need? Ask us in your language.
    </span>
  </div>

  <ChevronRight size={21} />
</button>


        <div className="services-grid">

  {services
    .filter((service) =>
      [
        "home-maintenance",
        "plumbing",
        "electrical",
        "ac-appliances",
        "carpentry",
        "painting",
        "gardening",
        "cleaning",
      ].includes(service.id)
    )
    .map((service) => {

      const Icon = service.icon;

      return (
        <button
          className="service-card"
          key={service.id}
          onClick={() => onSelectCategory(service.id)}
        >
          <div className="service-image-wrapper">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
          </div>

          <div className="service-card-bottom">

            <div className="service-title-content">

              <div className="service-title-row">
                <div className="service-small-icon">
                  <Icon size={16} />
                </div>

                <span>{service.title}</span>
              </div>

            </div>

            <div className="service-arrow-circle">
              <ChevronRight size={18} />
            </div>

          </div>
        </button>
      );
    })}

</div>
{/* More Services */}
<section className="more-services-section">

  <div className="more-services-header">
    <div>
      <h2>More Services</h2>
      <p>Explore more services for your home and family</p>
    </div>

    <div className="more-services-arrows">
      <button
        type="button"
        className="more-service-arrow"
        onClick={() => {
          document
            .querySelector(".more-services-scroll")
            ?.scrollBy({
              left: -320,
              behavior: "smooth",
            });
        }}
      >
        ←
      </button>

      <button
        type="button"
        className="more-service-arrow"
        onClick={() => {
          document
            .querySelector(".more-services-scroll")
            ?.scrollBy({
              left: 320,
              behavior: "smooth",
            });
        }}
      >
        →
      </button>
    </div>
  </div>

  <div className="more-services-scroll">

    {services
      .filter(
        (service) =>
          ![
            "home-maintenance",
            "plumbing",
            "electrical",
            "ac-appliances",
            "carpentry",
            "painting",
            "gardening",
            "cleaning",
          ].includes(service.id)
      )
      .map((service) => {

        const Icon = service.icon;

        return (
          <button
            className="more-service-card"
            key={service.id}
            onClick={() => onSelectCategory(service.id)}
          >
            <div className="more-service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="more-service-image"
              />
            </div>

            <div className="more-service-bottom">
              <div className="more-service-title">
                <div className="more-service-icon">
                  <Icon size={17} />
                </div>

                <span>{service.title}</span>
              </div>

              <div className="more-service-arrow-circle">
                <ChevronRight size={17} />
              </div>
            </div>
          </button>
        );
      })}

  </div>

</section>
        </section>


        {/* RECOMMENDED WORKER */}
        <section className="home-section">

          <div className="section-heading">

            <h2>{t.recommended}</h2>

            <button className="see-all-button">
              {t.seeAll}
              <ChevronRight size={16} />
            </button>

          </div>


          <div className="worker-card">

            <div className="worker-avatar">
              <UserRound size={31} />
            </div>


            <div className="worker-info">

              <div className="worker-name-row">

                <h3>Home Service Expert</h3>

                <span className="verified-badge">
                  <ShieldCheck size={15} />
                </span>

              </div>


              <span className="worker-role">
                {t.verified}
              </span>


              <div className="worker-rating">

                <Star size={15} fill="currentColor" />

                <strong>{t.rating}</strong>

                <span>{t.reviews}</span>

              </div>


              <p className="worker-available">
                ● {t.available}
              </p>

            </div>


            <button className="worker-arrow">
              <ChevronRight size={21} />
            </button>

          </div>

        </section>


        {/* QUICK HELP CARD */}
        <section className="quick-help">

          <div className="quick-help-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <strong>Need help choosing?</strong>
            <p>Find the right service for your home.</p>
          </div>

          <ChevronRight size={20} />

        </section>

      </main>


      {/* BOTTOM NAV */}
      <nav className="customer-bottom-nav">

        <button className="bottom-nav-item active">
          <Home size={21} />
          <span>{t.home}</span>
        </button>

        <button
  className="bottom-nav-item"
  type="button"
  onClick={onOpenBookings}
>
  <CalendarDays size={21} />
  <span>{t.bookings}</span>
</button>
       <button
  className="bottom-nav-item"
  type="button"
  onClick={onOpenFavorites}
>
  <Heart size={21} />
  <span>{t.favorites}</span>
</button>
<button
  className="bottom-nav-item"
  type="button"
  onClick={onOpenProfile}
> 
  <UserRound size={21} />
  <span>{t.profile}</span>
</button>

      </nav>

    </div>
  );
}

export default CustomerHome;