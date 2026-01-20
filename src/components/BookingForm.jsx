import { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Booking request submitted!");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      address: "",
    });
  };

  return (
    <section className="booking">
      <div className="booking-container">
        <div className="booking-form-section">
          <h2 className="booking-title">Booking Form</h2>
          <p className="booking-subtitle">
            Fill out the information to get a quote on your project
          </p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Get a Quote
            </button>
          </form>
        </div>

        <div className="booking-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <p className="info-label">Address</p>
              <p className="info-text">2662 Eldridge Rd, Asheville, NC 28805</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <p className="info-label">Phone</p>
              <p className="info-text">(828) 555-0136</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <p className="info-label">Email</p>
              <p className="info-text">hello@renovacom.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
