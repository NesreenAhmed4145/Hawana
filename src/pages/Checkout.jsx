import React, { useState } from "react";
import "./Checkout.css";

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [phonePrefix, setPhonePrefix] = useState("+966");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleConfirm = () => {
    const request = {
      deliveryMethod,
      paymentMethod,
      phone: phonePrefix + phoneNumber,
      fullName,
    };
    console.log("Checkout Data:", request);
    alert("Your request has been confirmed!");
  };

  return (
    <div className="containerr" dir="ltr">
      <h2>Complete Payment & Delivery</h2>

      <div className="section">
        <label className="label">Delivery</label>
        <div className="button-group">
          <button
            className={`button ${deliveryMethod === "Delivery" ? "green-btn" : "gray-btn"}`}
            onClick={() => setDeliveryMethod("Delivery")}
          >
            Delivery
          </button>
          <button
            className={`button ${deliveryMethod === "Pick up from store" ? "green-btn" : "gray-btn"}`}
            onClick={() => setDeliveryMethod("Pick up from store")}
          >
            Pick up from store
          </button>
        </div>
      </div>

      <div className="section">
        <label className="label">Payment</label>
        <div className="button-group">
          {["Online Payment", "Pay at Store", "Cash on Delivery"].map((method) => (
            <button
              key={method}
              className={`button ${paymentMethod === method ? "green-btn" : "gray-btn"}`}
              onClick={() => setPaymentMethod(method)}
            >
              {method}
            </button>
          ))}
        </div>

        <div className="payment-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
          <img src="https://seeklogo.com/images/S/stc-pay-logo-46D2F45F3A-seeklogo.com.png" alt="STC Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Mada_Logo.svg" alt="Mada" />
        </div>
      </div>

      <div className="section total">
        <p>Delivery Fee: 0.00 SAR</p>
        <p>VAT: 5.22 SAR</p>
        <p>
          Total Cost: <span>40.00 SAR</span>
        </p>
      </div>

      <div className="section">
        <h2>Customer Information</h2>
        <label className="label">Phone</label>
        <input
          type="tel"
          placeholder="+966"
          value={phonePrefix}
          onChange={(e) => setPhonePrefix(e.target.value)}
        />
        <input
          type="tel"
          placeholder="01141177479"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="label">Full Name</label>
        <input
          type="text"
          placeholder="Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="button" className="button" onClick={handleConfirm}>
          Confirm Request
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
