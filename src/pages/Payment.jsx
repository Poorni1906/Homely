import {
  ArrowLeft,
  CreditCard,
  Smartphone,
  Banknote,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function Payment({ booking, onBack, onPaymentSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);

  if (!booking) return null;

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      onPaymentSuccess();
    }, 1200);
  };

  return (
    <div className="payment-page">

      {/* Top Bar */}
      <header className="payment-topbar">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1>Payment</h1>
          <span>Complete your booking</span>
        </div>
      </header>

      <main className="payment-content">

        {/* Page Heading */}
        <div className="payment-heading">
          <div>
            <h2>Choose Payment Method</h2>
            <p>Select how you would like to pay</p>
          </div>
        </div>

        <div className="payment-layout">

          {/* Left - Payment Methods */}
          <section className="payment-methods">

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "upi" ? "selected" : ""
              }`}
              onClick={() => setPaymentMethod("upi")}
            >
              <div className="payment-method-icon">
                <Smartphone size={22} />
              </div>

              <div className="payment-method-info">
                <strong>UPI</strong>
                <span>Google Pay, PhonePe, Paytm & more</span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "upi" && <CheckCircle2 size={20} />}
              </div>
            </button>

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "card" ? "selected" : ""
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <div className="payment-method-icon">
                <CreditCard size={22} />
              </div>

              <div className="payment-method-info">
                <strong>Credit / Debit Card</strong>
                <span>Visa, Mastercard, RuPay & more</span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "card" && <CheckCircle2 size={20} />}
              </div>
            </button>

            <button
              type="button"
              className={`payment-method ${
                paymentMethod === "cash" ? "selected" : ""
              }`}
              onClick={() => setPaymentMethod("cash")}
            >
              <div className="payment-method-icon">
                <Banknote size={22} />
              </div>

              <div className="payment-method-info">
                <strong>Cash on Service</strong>
                <span>Pay directly after the service</span>
              </div>

              <div className="payment-radio">
                {paymentMethod === "cash" && <CheckCircle2 size={20} />}
              </div>
            </button>

          </section>

          {/* Right - Summary */}
          <aside className="payment-summary">

            <h3>Booking Summary</h3>

            <div className="payment-service">
              <img
                src={booking.image}
                alt={booking.service}
              />

              <div>
                <span>{booking.category}</span>
                <strong>{booking.service}</strong>
              </div>
            </div>

            <div className="payment-summary-details">

              <div>
                <span>Service Charge</span>
                <strong>₹299</strong>
              </div>

              <div>
                <span>Platform Fee</span>
                <strong>₹0</strong>
              </div>

              <div className="payment-divider" />

              <div className="payment-total">
                <span>Total Amount</span>
                <strong>₹299</strong>
              </div>

            </div>

            <button
              type="button"
              className="pay-now-button"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing
                ? "Processing..."
                : paymentMethod === "cash"
                ? "Confirm Booking"
                : "Pay ₹299"}
            </button>

            <p className="payment-secure">
              🔒 Your payment information is secure
            </p>

          </aside>

        </div>
      </main>
    </div>
  );
}

export default Payment;