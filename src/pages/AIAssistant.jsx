import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  Send,
  Mic,
  Sparkles,
  Wrench,
} from "lucide-react";

function AIAssistant({ language = "en", onBack, onSelectService }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const languageText = {
    en: {
      title: "HOMELY AI",
      subtitle: "Your smart home service assistant",
      greeting:
        "Hi! Tell me what problem you're facing at home, and I'll help you find the right service.",
      placeholder: "Describe your problem...",
      send: "Send",
      recommended: "Recommended service",
      continue: "Find this service",
      suggestions: [
        "My tap is leaking",
        "My AC is not cooling",
        "I need house cleaning",
      ],
      noMatch:
        "I can help you find the right home service. Please describe your problem in a little more detail.",
    },

    ta: {
      title: "HOMELY AI",
      subtitle: "உங்கள் ஸ்மார்ட் வீட்டு சேவை உதவியாளர்",
      greeting:
        "வணக்கம்! உங்கள் வீட்டில் என்ன பிரச்சனை உள்ளது என்று சொல்லுங்கள். சரியான சேவையைத் தேர்வு செய்ய நான் உதவுகிறேன்.",
      placeholder: "உங்கள் பிரச்சனையை எழுதுங்கள்...",
      send: "அனுப்பு",
      recommended: "பரிந்துரைக்கப்படும் சேவை",
      continue: "இந்த சேவையைத் தேர்வு செய்க",
      suggestions: [
        "என் குழாய் தண்ணீர் கசிகிறது",
        "என் AC குளிர்விக்கவில்லை",
        "எனக்கு வீடு சுத்தம் செய்ய வேண்டும்",
      ],
      noMatch:
        "சரியான வீட்டு சேவையை கண்டுபிடிக்க நான் உதவுகிறேன். உங்கள் பிரச்சனையை இன்னும் கொஞ்சம் விளக்குங்கள்.",
    },

    hi: {
      title: "HOMELY AI",
      subtitle: "आपका स्मार्ट होम सर्विस सहायक",
      greeting:
        "नमस्ते! अपने घर की समस्या बताएं। मैं आपके लिए सही सेवा चुनने में मदद करूंगा।",
      placeholder: "अपनी समस्या बताएं...",
      send: "भेजें",
      recommended: "सुझाई गई सेवा",
      continue: "यह सेवा चुनें",
      suggestions: [
        "मेरे नल से पानी लीक हो रहा है",
        "मेरा AC ठंडा नहीं कर रहा",
        "मुझे घर की सफाई चाहिए",
      ],
      noMatch:
        "मैं सही होम सर्विस ढूंढने में आपकी मदद कर सकता हूं। कृपया अपनी समस्या थोड़ी और विस्तार से बताएं।",
    },

    te: {
      title: "HOMELY AI",
      subtitle: "మీ స్మార్ట్ హోమ్ సర్వీస్ సహాయకుడు",
      greeting:
        "నమస్కారం! మీ ఇంట్లో ఉన్న సమస్యను చెప్పండి. సరైన సేవను ఎంచుకోవడానికి నేను సహాయం చేస్తాను.",
      placeholder: "మీ సమస్యను వివరించండి...",
      send: "పంపండి",
      recommended: "సిఫార్సు చేయబడిన సేవ",
      continue: "ఈ సేవను ఎంచుకోండి",
      suggestions: [
        "నా ట్యాప్ నుండి నీరు లీక్ అవుతోంది",
        "నా AC చల్లగా చేయడం లేదు",
        "నాకు ఇంటిని శుభ్రం చేయాలి",
      ],
      noMatch:
        "సరైన హోమ్ సర్వీస్‌ను కనుగొనడంలో నేను సహాయం చేస్తాను. మీ సమస్యను కొంచెం వివరంగా చెప్పండి.",
    },

    kn: {
      title: "HOMELY AI",
      subtitle: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಹೋಮ್ ಸರ್ವಿಸ್ ಸಹಾಯಕ",
      greeting:
        "ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಮನೆಯ ಸಮಸ್ಯೆಯನ್ನು ತಿಳಿಸಿ. ಸರಿಯಾದ ಸೇವೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಾನು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.",
      placeholder: "ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ...",
      send: "ಕಳುಹಿಸಿ",
      recommended: "ಶಿಫಾರಸು ಮಾಡಲಾದ ಸೇವೆ",
      continue: "ಈ ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      suggestions: [
        "ನನ್ನ ಟ್ಯಾಪ್‌ನಲ್ಲಿ ನೀರು ಸೋರಿಕೆಯಾಗುತ್ತಿದೆ",
        "ನನ್ನ AC ತಂಪಾಗುತ್ತಿಲ್ಲ",
        "ನನಗೆ ಮನೆ ಸ್ವಚ್ಛಗೊಳಿಸಬೇಕು",
      ],
      noMatch:
        "ಸರಿಯಾದ ಹೋಮ್ ಸರ್ವಿಸ್ ಹುಡುಕಲು ನಾನು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಸ್ವಲ್ಪ ವಿವರವಾಗಿ ತಿಳಿಸಿ.",
    },

    ml: {
      title: "HOMELY AI",
      subtitle: "നിങ്ങളുടെ സ്മാർട്ട് ഹോം സർവീസ് സഹായി",
      greeting:
        "നമസ്കാരം! നിങ്ങളുടെ വീട്ടിലെ പ്രശ്നം പറയൂ. ശരിയായ സേവനം തിരഞ്ഞെടുക്കാൻ ഞാൻ സഹായിക്കാം.",
      placeholder: "നിങ്ങളുടെ പ്രശ്നം വിവരിക്കുക...",
      send: "അയയ്ക്കുക",
      recommended: "ശുപാർശ ചെയ്യുന്ന സേവനം",
      continue: "ഈ സേവനം തിരഞ്ഞെടുക്കുക",
      suggestions: [
        "എന്റെ ടാപ്പിൽ നിന്ന് വെള്ളം ചോരുന്നു",
        "എന്റെ AC തണുപ്പിക്കുന്നില്ല",
        "എനിക്ക് വീട് വൃത്തിയാക്കണം",
      ],
      noMatch:
        "ശരിയായ ഹോം സർവീസ് കണ്ടെത്താൻ ഞാൻ സഹായിക്കാം. നിങ്ങളുടെ പ്രശ്നം കുറച്ച് കൂടി വിശദീകരിക്കൂ.",
    },
  };

  const t = languageText[language] || languageText.en;

  const detectService = (text) => {
    const lower = text.toLowerCase();

    if (
      lower.includes("tap") ||
      lower.includes("water") ||
      lower.includes("leak") ||
      lower.includes("குழாய்") ||
      lower.includes("தண்ணீர்") ||
      lower.includes("கசிவு") ||
      lower.includes("नल") ||
      lower.includes("पानी")
    ) {
      return {
        id: "plumbing",
        name:
          language === "ta"
            ? "Plumbing"
            : language === "hi"
              ? "प्लंबिंग"
              : "Plumbing",
      };
    }

    if (
      lower.includes("ac") ||
      lower.includes("air conditioner") ||
      lower.includes("குளிர்") ||
      lower.includes("एसी")
    ) {
      return {
        id: "ac-appliances",
        name:
          language === "ta"
            ? "AC & Appliances"
            : language === "hi"
              ? "AC और उपकरण"
              : "AC & Appliances",
      };
    }

    if (
      lower.includes("clean") ||
      lower.includes("cleaning") ||
      lower.includes("சுத்தம்") ||
      lower.includes("सफाई") ||
      lower.includes("വൃത്തിയ")
    ) {
      return {
        id: "cleaning",
        name:
          language === "ta"
            ? "Cleaning"
            : language === "hi"
              ? "Cleaning"
              : "Cleaning",
      };
    }

    if (
      lower.includes("fan") ||
      lower.includes("light") ||
      lower.includes("electric") ||
      lower.includes("current") ||
      lower.includes("மின்சாரம்") ||
      lower.includes("விசிறி") ||
      lower.includes("बिजली")
    ) {
      return {
        id: "electrical",
        name:
          language === "ta"
            ? "Electrical"
            : language === "hi"
              ? "Electrical"
              : "Electrical",
      };
    }

    if (
      lower.includes("door") ||
      lower.includes("wood") ||
      lower.includes("கதவு") ||
      lower.includes("மரம்")
    ) {
      return {
        id: "carpentry",
        name:
          language === "ta"
            ? "Carpentry"
            : language === "hi"
              ? "Carpentry"
              : "Carpentry",
      };
    }

    if (
      lower.includes("garden") ||
      lower.includes("plant") ||
      lower.includes("தோட்டம்") ||
      lower.includes("पौधा") ||
      lower.includes("बगीचा")
    ) {
      return {
        id: "gardening",
        name:
          language === "ta"
            ? "Gardening"
            : language === "hi"
              ? "Gardening"
              : "Gardening",
      };
    }

    return null;
  };

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const newUserMessage = {
      type: "user",
      text: trimmedMessage,
    };

    const service = detectService(trimmedMessage);

    const aiMessage = service
      ? {
          type: "ai",
          text:
            language === "ta"
              ? `உங்கள் பிரச்சனைக்கு ${service.name} சேவை தேவைப்படலாம்.`
              : language === "hi"
                ? `आपकी समस्या के लिए ${service.name} सेवा की आवश्यकता हो सकती है।`
                : `You may need ${service.name} service for this problem.`,
          service,
        }
      : {
          type: "ai",
          text: t.noMatch,
        };

    setMessages((previous) => [
      ...previous,
      newUserMessage,
      aiMessage,
    ]);

    setMessage("");
  };

  const handleSuggestion = (suggestion) => {
    setMessage(suggestion);
  };

  return (
    <div className="ai-page">

      <header className="ai-topbar">
        <button className="ai-back-button" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>

        <div className="ai-heading">
          <div className="ai-logo">
            <Bot size={22} />
          </div>

          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>
      </header>

      <main className="ai-container">

        <div className="ai-welcome-card">
          <div className="ai-large-icon">
            <Sparkles size={28} />
          </div>

          <h2>{t.title}</h2>

          <p>{t.greeting}</p>
        </div>

        {messages.length === 0 && (
          <div className="ai-suggestions">
            <p>Try asking:</p>

            <div className="suggestion-list">
              {t.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="ai-messages">
          {messages.map((item, index) => (
            <div
              key={index}
              className={
                item.type === "user"
                  ? "ai-message user-message"
                  : "ai-message bot-message"
              }
            >
              {item.type === "ai" && (
                <div className="message-icon">
                  <Bot size={17} />
                </div>
              )}

              <div className="message-content">
                <p>{item.text}</p>

                {item.service && (
                  <div className="recommended-service">
                    <div className="recommended-header">
                      <Wrench size={18} />

                      <span>{t.recommended}</span>
                    </div>

                    <strong>{item.service.name}</strong>

                    <button
                      onClick={() => {
                        if (onSelectService) {
                          onSelectService(item.service.id);
                        }
                      }}
                    >
                      {t.continue}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>

      <div className="ai-input-area">
        <div className="ai-input-box">

          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSend();
              }
            }}
            placeholder={t.placeholder}
          />

          <button
            className="mic-button"
            type="button"
            title="Voice input"
          >
            <Mic size={20} />
          </button>

          <button
            className="send-button"
            onClick={handleSend}
            type="button"
          >
            <Send size={19} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default AIAssistant;