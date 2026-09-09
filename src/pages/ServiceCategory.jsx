import { ArrowLeft, Star, Heart } from "lucide-react";

function ServiceCategory({ category, onBack, onBookService,favorites =[],onToggleFavorite,}) {
  if (!category) return null;

  const Icon = category.icon;

  return (
    <div className="service-category-page">

      {/* ================= TOP BAR ================= */}
      <header className="service-category-topbar">

        <button
          className="back-button"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="service-category-title">

          <div className="service-category-icon">
            {Icon && <Icon size={22} />}
          </div>

          <div>
            <h1>{category.title}</h1>
            <span>Choose a service</span>
          </div>

        </div>

      </header>


      {/* ================= HERO IMAGE ================= */}
      <div className="category-hero">

        <img
          src={category.image}
          alt={category.title}
        />

        <div className="category-hero-overlay">

          <h2>{category.title}</h2>

          <p>
            Find the right service for your home
          </p>

        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <main className="service-category-content">

        <div className="booking-layout">

          {/* ================= RIGHT SIDE ================= */}
          <section className="service-results">

            {/* Header */}
            <div className="service-results-header">

              <div>

                <h2>
                  {category.title} Services
                </h2>

                <p>
                  Professional services from trusted providers
                </p>

              </div>

            </div>


            {/* ================= SERVICE CARDS ================= */}
            <div className="service-results-grid">

              {category.services.map((service) => (

                <div
                  className="service-booking-card"
                  key={service}
                >
                  <button
  type="button"
  className={`favorite-service-button ${
    favorites.some((favorite) => favorite.id === service)
      ? "favorited"
      : ""
  }`}
  onClick={() => onToggleFavorite(service)}
>
  <Heart
    size={20}
    fill={
      favorites.some((favorite) => favorite.id === service)
        ? "currentColor"
        : "none"
    }
  />
</button>

                  {/* Service Image */}
                  <div className="service-booking-image">

                    <img
                      src={category.image}
                      alt={service}
                    />

                  </div>


                  {/* Card Content */}
                  <div className="service-booking-content">

                    <h3>
                      {service}
                    </h3>


                    {/* Rating */}
                    <div className="service-rating">

                      <Star
                        size={15}
                        fill="currentColor"
                      />

                      <span>
                        4.8
                      </span>

                      <span className="rating-count">
                        (120+)
                      </span>

                    </div>


                    {/* Bottom Section */}
                    <div className="service-booking-bottom">

                      {/* Price */}
                      <div className="service-price">

                        <span>
                          Starting from
                        </span>

                        <strong>
                          ₹299
                        </strong>

                      </div>


                      {/* Book Button */}
                      <button
                        type="button"
                        className="book-service-button"
                        onClick={() => onBookService(service)}
                      >
                        Book
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default ServiceCategory;