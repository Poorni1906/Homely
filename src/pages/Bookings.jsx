import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

function Bookings({ bookings, onBackHome }) {
  return (
    <div className="bookings-page">

      {/* Top Bar */}
      <header className="bookings-topbar">
        <button
          type="button"
          className="back-button"
          onClick={onBackHome}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1>My Bookings</h1>
          <span>View your service bookings</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="bookings-content">

        <div className="bookings-heading">
          <div>
            <h2>Your Bookings</h2>
            <p>Track and manage your booked services</p>
          </div>

          <div className="bookings-count">
            {bookings.length}
          </div>
        </div>

        {/* No Booking */}
        {!bookings.length && (
          <div className="bookings-empty">

            <div className="bookings-empty-icon">
              <CalendarDays size={36} />
            </div>

            <h2>No bookings yet</h2>

            <p>
              Your booked services will appear here.
            </p>

            <button
              type="button"
              className="browse-bookings-button"
              onClick={onBackHome}
            >
              Browse Services
            </button>

          </div>
        )}

        {/* Booking Card */}
        {
        bookings.map((booking) => (
          <div className="booking-history-card" key={booking.bookingId}>

            {/* Actual Service Image */}
            <div className="booking-history-image">
              <img
                src={booking.image}
                alt={booking.service}
              />
            </div>

            <div className="booking-history-content">

              <div className="booking-status">
                Confirmed
              </div>

              <h3>
                {booking.service}
              </h3>

              <p className="booking-category">
                {booking.category}
              </p>

              <div className="booking-details">

                <div className="booking-detail">
                  <CalendarDays size={17} />
                  <span>
                    {booking.date}
                  </span>
                </div>

                <div className="booking-detail">
                  <Clock size={17} />
                  <span>
                    {booking.time}
                  </span>
                </div>

                <div className="booking-detail">
                  <MapPin size={17} />
                  <span>
                    {booking.address ||
                      "Your selected location"}
                  </span>
                </div>

              </div>

              <div className="booking-history-bottom">

                <strong>
                  ₹299
                </strong>

                <span>
                  Booking confirmed
                </span>

              </div>

            </div>

          </div>
        ))
      }

      </main>
    </div>
  );
}

export default Bookings;