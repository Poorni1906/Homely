import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function Booking({ service, category, onBack, onContinue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!service || !category) return null;

  // Generate a few simple date options
  const dates = [
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "Sep 9", value: "Sep 9" },
    { label: "Sep 10", value: "Sep 10" },
    { label: "Sep 11", value: "Sep 11" },
  ];

  const times = [
    "9:00 AM",
    "11:00 AM",
    "2:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="booking-page">

      {/* Top Bar */}
      <header className="booking-topbar">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1>Book Service</h1>
          <span>Choose your preferred time</span>
        </div>

      </header>


      {/* Main Content */}
      <main className="booking-content">

        {/* Service Summary */}
        <section className="booking-service-card">

          <div className="booking-service-image">
            <img
              src={category.image}
              alt={service}
            />
          </div>

          <div className="booking-service-info">

            <span className="booking-category">
              {category.title}
            </span>

            <h2>{service}</h2>

            <p>
              Professional service from a trusted HOMELY provider.
            </p>

            <strong>Starting from ₹299</strong>

          </div>

        </section>


        {/* Date */}
        <section className="booking-section">

          <div className="booking-section-title">

            <div className="booking-section-icon">
              <CalendarDays size={19} />
            </div>

            <div>
              <h2>Select Date</h2>
              <p>When would you like the service?</p>
            </div>

          </div>


          <div className="date-options">

            {dates.map((date) => (

              <button
                key={date.value}
                type="button"
                className={`date-option ${
                  selectedDate === date.value
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate(date.value)
                }
              >

                <span>{date.label}</span>

                {selectedDate === date.value && (
                  <CheckCircle2 size={16} />
                )}

              </button>

            ))}

          </div>

        </section>


        {/* Time */}
        <section className="booking-section">

          <div className="booking-section-title">

            <div className="booking-section-icon">
              <Clock3 size={19} />
            </div>

            <div>
              <h2>Select Time</h2>
              <p>Choose a convenient time slot</p>
            </div>

          </div>


          <div className="time-options">

            {times.map((time) => (

              <button
                key={time}
                type="button"
                className={`time-option ${
                  selectedTime === time
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedTime(time)
                }
              >
                {time}
              </button>

            ))}

          </div>

        </section>


        {/* Address */}
        <section className="booking-section">

          <div className="booking-section-title">

            <div className="booking-section-icon">
              <MapPin size={19} />
            </div>

            <div>
              <h2>Service Address</h2>
              <p>Where should we provide the service?</p>
            </div>

          </div>


       <div className="booking-address">

  <MapPin size={20} />

  <div className="booking-address-details">

    <strong>
      {localStorage.getItem("homely-location") ||
        "Your saved location"}
    </strong>

    <span>
      This location will be used for your service
    </span>

  </div>

  <button
    type="button"
    className="change-address-button"
    onClick={() => {
      const newAddress = window.prompt(
        "Enter your service address"
      );

      if (newAddress && newAddress.trim()) {
        localStorage.setItem(
          "homely-location",
          newAddress.trim()
        );

        window.location.reload();
      }
    }}
  >
    Change
  </button>

</div>
        </section>


        {/* Continue */}
        <button
          type="button"
          className="booking-continue-button"
          disabled={!selectedDate || !selectedTime}
          onClick={() => {
            onContinue({
              service,
              category: category.title,
              date: selectedDate,
              time: selectedTime,
              address:
              localStorage.getItem("homely-location")||"Saved location",
            });
          }}
        >
          Continue
        </button>

      </main>

    </div>
  );
}

export default Booking;