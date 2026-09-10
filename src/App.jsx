import { useState } from "react";
import { ArrowRight, ShieldCheck, Users, Home } from "lucide-react";

import Language from "./pages/Language";
import RoleSelection from "./pages/RoleSelection";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/customerRegister";
import CustomerHome from "./pages/customerHome";
import ServiceCategory from "./pages/ServiceCategory";
import AIAssistant from "./pages/AIAssistant";
import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings";
import BookingConfirmation from "./pages/BookingConfirmation";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Payment from "./pages/Payment";

import services from "./data/services";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [language, setLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [paymentBooking, setPaymentBooking] = useState(null);

  /* =========================
     LANGUAGE SCREEN
  ========================= */

  if (screen === "language") {
    return (
      <Language
        onBack={() => setScreen("welcome")}
        onContinue={(selectedLanguage) => {
          setLanguage(selectedLanguage);
          setScreen("role");
        }}
      />
    );
  }

  /* =========================
     ROLE SELECTION
  ========================= */

  if (screen === "role") {
    return (
      <RoleSelection
        language={language}
        onBack={() => setScreen("language")}
        onSelectRole={(role) => {
          console.log("Selected role:", role);

          if (role === "customer") {
            setScreen("customer-login");
          } else {
            console.log("Selected role:", role);
          }
        }}
      />
    );
  }

  /* =========================
     CUSTOMER LOGIN
  ========================= */

  if (screen === "customer-login") {
    return (
      <CustomerLogin
        language={language}
        onBack={() => setScreen("role")}
        onLogin={() => setScreen("customer-home")}
        onCreateAccount={() => {
          setScreen("customer-register");
        }}
      />
    );
  }

  /* =========================
     CUSTOMER REGISTER
  ========================= */

  if (screen === "customer-register") {
    return (
      <CustomerRegister
        language={language}
        onBack={() => {
          setScreen("customer-login");
        }}
        onRegister={(customerData) => {
          console.log("Customer registration:", customerData);
          setScreen("customer-home");
        }}
      />
    );
  }

  /* =========================
     CUSTOMER HOME
  ========================= */

  if (screen === "customer-home") {
    return (
      <CustomerHome
        language={language}
        onOpenAI={() => {
          setScreen("ai");
        }}
        onOpenBookings={() => {
          setScreen("bookings");
        }}
        onOpenFavorites={() => {
          setScreen("favorites");
        }}
        onOpenProfile={() => {
          setScreen("profile");
        }}
        onSelectCategory={(categoryId) => {
          const category = services.find(
            (item) => item.id === categoryId
          );

          if (category) {
            setSelectedCategory(category);
            setScreen("service-category");
          }
        }}
      />
    );
  }

  /* =========================
     AI ASSISTANT
  ========================= */

  if (screen === "ai") {
    return (
      <AIAssistant
        language={language}
        onBack={() => {
          setScreen("customer-home");
        }}
        onSelectService={(serviceId) => {
          const category = services.find(
            (item) => item.id === serviceId
          );

          if (category) {
            setSelectedCategory(category);
            setScreen("service-category");
          }
        }}
      />
    );
  }

  /* =========================
     SERVICE CATEGORY
  ========================= */

  if (screen === "service-category") {
    return (
      <ServiceCategory
        category={selectedCategory}
        favorites={favorites}
        onToggleFavorite={(service) => {
          setFavorites((currentFavorites) => {
            const exists = currentFavorites.some(
              (favorite) => favorite.id === service
            );

            if (exists) {
              return currentFavorites.filter(
                (favorite) => favorite.id !== service
              );
            }

            return [
              ...currentFavorites,
              {
                id: service,
                service: service,
                category: selectedCategory.title,
                image: selectedCategory.image,
              },
            ];
          });
        }}
        onBack={() => {
          setScreen("customer-home");
        }}
        onBookService={(service) => {
          setSelectedService(service);
          setScreen("booking");
        }}
      />
    );
  }

  /* =========================
     BOOKING
  ========================= */

  if (screen === "booking") {
    return (
      <Booking
        service={selectedService}
        category={selectedCategory}
        onBack={() => {
          setScreen("service-category");
        }}
        onContinue={(data) => {
          const newBooking = {
            ...data,
            image: selectedCategory?.image,
            bookingId:
              "HM-" +
              Math.floor(100000 + Math.random() * 900000),
          };

          setPaymentBooking(newBooking);
          setScreen("payment");
        }}
      />
    );
  }

  /* =========================
     PAYMENT
  ========================= */

  if (screen === "payment") {
    return (
      <Payment
        booking={paymentBooking}
        onBack={() => {
          setScreen("booking");
        }}
        onPaymentSuccess={() => {
          setBookingData(paymentBooking);
          setScreen("booking-confirmation");
        }}
      />
    );
  }

  /* =========================
     BOOKING CONFIRMATION
  ========================= */

  if (screen === "booking-confirmation") {
    return (
      <BookingConfirmation
        booking={bookingData}
        onBackHome={() => {
          setScreen("customer-home");
        }}
      />
    );
  }

  /* =========================
     BOOKINGS
  ========================= */

  if (screen === "bookings") {
    return (
      <Bookings
        bookings={bookingData ? [bookingData] : []}
        onBackHome={() => {
          setScreen("customer-home");
        }}
      />
    );
  }

  /* =========================
     PROFILE
  ========================= */

  if (screen === "profile") {
    return (
      <Profile
        language={language}
        onBackHome={() => {
          setScreen("customer-home");
        }}
        onLogout={() => {
          setScreen("customer-login");
        }}
      />
    );
  }

  /* =========================
     FAVORITES
  ========================= */

  if (screen === "favorites") {
    return (
      <Favorites
        favorites={favorites}
        onBackHome={() => {
          setScreen("customer-home");
        }}
        onRemoveFavorite={(id) => {
          setFavorites((currentFavorites) =>
            currentFavorites.filter(
              (favorite) => favorite.id !== id
            )
          );
        }}
      />
    );
  }

  /* =========================
     WELCOME SCREEN
  ========================= */

  return (
    <div className="app">

      {/* Background */}
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      {/* TOP BAR */}
      <header className="top-bar">

        <div className="logo">

          <div className="logo-icon">
            <Home
              size={24}
              strokeWidth={2.5}
            />
          </div>

          <div>
            <h1>HOMELY</h1>

            <span>
              Help That Feels Like Home.
            </span>
          </div>

        </div>

        <button className="language-button">
          EN
        </button>

      </header>

      {/* MAIN CONTENT */}
      <main className="welcome-container">

        <section className="welcome-content">

          <div className="small-badge">
            <ShieldCheck size={16} />
            Trusted home services
          </div>

          <h2>
            Help for your home,
            <br />
            <span>
              whenever you need it.
            </span>
          </h2>

          <p className="description">
            Find trusted local professionals for your home
            services — simple, safe and stress-free.
          </p>

          <button
            className="get-started"
            onClick={() => setScreen("language")}
          >
            Get Started
            <ArrowRight size={21} />
          </button>

          <div className="trust-points">

            <div className="trust-item">

              <div className="trust-icon">
                <ShieldCheck size={19} />
              </div>

              <div>
                <strong>
                  Trusted
                </strong>

                <span>
                  Verified workers
                </span>
              </div>

            </div>

            <div className="trust-item">

              <div className="trust-icon">
                <Users size={19} />
              </div>

              <div>
                <strong>
                  Local
                </strong>

                <span>
                  People near you
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* HOUSE ILLUSTRATION */}
        <section className="house-section">

          <div className="sun"></div>

          <div className="cloud cloud-one"></div>
          <div className="cloud cloud-two"></div>

          <div className="house-scene">

            <div className="tree tree-left">
              <div className="tree-top"></div>
              <div className="tree-trunk"></div>
            </div>

            <div className="tree tree-right">
              <div className="tree-top"></div>
              <div className="tree-trunk"></div>
            </div>

            <div className="house">

              <div className="roof"></div>

              <div className="house-body">

                <div className="window window-left">
                  <div></div>
                  <div></div>
                </div>

                <div className="door">
                  <div className="door-handle"></div>
                </div>

                <div className="window window-right">
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>

            <div className="path"></div>

            <div className="flower flower-one"></div>
            <div className="flower flower-two"></div>
            <div className="flower flower-three"></div>

          </div>

        </section>

      </main>

      <footer className="bottom-text">
        Simple • Safe • Community powered
      </footer>

    </div>
  );
}

export default App;