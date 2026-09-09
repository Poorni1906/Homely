import {
  CheckCircle2,
  CalendarDays,
  Clock3,
  MapPin,
  ArrowLeft,
} from "lucide-react";

function BookingConfirmation({
  booking,
  onBackHome,
}) {
  if (!booking) return null;

  const address =
    localStorage.getItem("homely-location") ||
    "Your selected location";

  return (
    <div className="booking-confirmation-page">

      {/* Top Bar */}
      <header className="booking-confirmation-topbar">

        <button
          type="button"
          className="back-button"
          onClick={onBackHome}
        >
          <ArrowLeft size={20} />
        </button>

        <h1>Booking Confirmation</h1>

      </header>


      {/* Confirmation Content */}
      <main className="confirmation-content">

        {/* Success Icon */}
        <div className="confirmation-success-icon">
          <CheckCircle2 size={58} />
        </div>

        <h2>Booking Confirmed!</h2>

        <p className="confirmation-message">
          Your service has been successfully booked.
        </p>


        {/* Booking Card */}
        <section className="confirmation-card">

          <div className="confirmation-service">

            <img
              src={booking.image}
              alt={booking.service}
            />

            <div>
              <span>{booking.category}</span>
              <h3>{booking.service}</h3>
            </div>

          </div>


          <div className="confirmation-divider" />


          {/* Date */}
          <div className="confirmation-detail">

            <div className="confirmation-detail-icon">
              <CalendarDays size={19} />
            </div>

            <div>
              <span>Date</span>
              <strong>{booking.date}</strong>
            </div>

          </div>


          {/* Time */}
          <div className="confirmation-detail">

            <div className="confirmation-detail-icon">
              <Clock3 size={19} />
            </div>

            <div>
              <span>Time</span>
              <strong>{booking.time}</strong>
            </div>

          </div>


          {/* Address */}
          <div className="confirmation-detail">

            <div className="confirmation-detail-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>Service Address</span>
              <strong>{address}</strong>
            </div>

          </div>

        </section>


        {/* Booking ID */}
        <div className="booking-id">
          <span>Booking ID</span>
          <strong>{booking.bookingId}</strong>
        </div>


        {/* Home Button */}
        <button
          type="button"
          className="confirmation-home-button"
          onClick={onBackHome}
        >
          Back to Home
        </button>

      </main>

    </div>
  );
}

export default BookingConfirmation;