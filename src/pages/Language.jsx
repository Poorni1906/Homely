import { useState } from "react";
import { ArrowLeft, ArrowRight, Globe2, Check } from "lucide-react";
import "../App.css";

function Language({ onBack, onContinue }) {
  const languages = [
    {
      id: "en",
      name: "English",
      nativeName: "English",
      flag: "🇬🇧",
    },
    {
      id: "ta",
      name: "Tamil",
      nativeName: "தமிழ்",
      flag: "🇮🇳",
    },
    {
      id: "hi",
      name: "Hindi",
      nativeName: "हिन्दी",
      flag: "🇮🇳",
    },
    {
      id: "te",
      name: "Telugu",
      nativeName: "తెలుగు",
      flag: "🇮🇳",
    },
    {
      id: "kn",
      name: "Kannada",
      nativeName: "ಕನ್ನಡ",
      flag: "🇮🇳",
    },
    {
      id: "ml",
      name: "Malayalam",
      nativeName: "മലയാളം",
      flag: "🇮🇳",
    },
    {
        id:"as",
        name:"Assamese",
        nativeName:"অসমীয়া",
        flag: "🇮🇳",
    },
    {
        id:"bn",
        name:"Bengali",
        nativeName:"বাংলা",
        flag: "🇮🇳",
    },
    {
        id:"mni",
        name:"Manipuri",
        nativeName:"মৈতৈলোন্",
        flag: "🇮🇳",
    },
    {
        id:"ur",
        name:"Urdu",
        nativeName:"اردو",
        flag: "🇮🇳",
    },
    {
        id:"sd",
        name:"Sindhi",
        nativeName:"سنڌي",
        flag: "🇮🇳",
    },
    {
        id:"sat",
        name:"Santali",
        nativeName:"ᱥᱟᱱᱛᱟᱲᱤ",
        flag: "🇮🇳",
    },
    {
        id:"sat",
        name:"Sanskrit",
        nativeName:"संस्कृतम्",
        flag: "🇮🇳",
    },
    {
        id:"pa",
        name:"Punjabi",
        nativeName:"ਪੰਜਾਬੀ",
        flag: "🇮🇳",
    },
    {
        id:"or",
        name:"Odia",
        nativeName:"ଓଡ଼ିଆ",
        flag: "🇮🇳",
    },
    {
        id:"ne",
        name:"Nepali",
        nativeName:"नेपाली",
        flag: "🇳🇵",
    },
    {
        id:"mr",
        name:"Marathi",
        nativeName:"मराठी",
        flag: "🇮🇳",
    },
    {
        id:"mai",
        name:"Maithili",
        nativeName:"मैथिली",
        flag: "🇮🇳",
    },
    {
        id:"ks",
        name:"Kashmiri",
        nativeName:"कश्मीरी",
        flag: "🇮🇳",
    },
    {
        id:"gu",
        name:"Gujarati",
        nativeName:"ગુજરાતી",
        flag: "🇮🇳",
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleContinue = () => {
    onContinue(selectedLanguage);
  };

  return (
    <div className="language-page">

      {/* Decorative background */}
      <div className="language-circle circle-one"></div>
      <div className="language-circle circle-two"></div>

      {/* Top bar */}
      <div className="language-topbar">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
        </button>

        <div className="mini-logo">
          <div className="mini-logo-icon">
            🏠
          </div>

          <span>HOMELY</span>
        </div>

        <div className="step-number">
          1 / 3
        </div>

      </div>

      {/* Main content */}
      <main className="language-content">

        <div className="language-icon">
          <Globe2 size={30} />
        </div>

        <h1>
          Choose your language
        </h1>

        <p>
          Select a language you're comfortable with.
        </p>

        {/* Language cards */}
        <div className="language-grid">

          {languages.map((language) => (

            <button
              key={language.id}
              className={`language-card ${
                selectedLanguage === language.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedLanguage(language.id)
              }
            >

              <span className="language-flag">
                {language.flag}
              </span>

              <div className="language-name">
                <strong>
                  {language.nativeName}
                </strong>

                <span>
                  {language.name}
                </span>
              </div>

              <div className="language-check">
                {selectedLanguage === language.id && (
                  <Check size={17} />
                )}
              </div>

            </button>

          ))}

        </div>

        {/* Continue */}
        <button
          className="language-continue"
          onClick={handleContinue}
        >
          Continue
          <ArrowRight size={20} />
        </button>

        <p className="language-note">
          You can change your language later.
        </p>

      </main>

    </div>
  );
}

export default Language;