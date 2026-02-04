import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import "../styles/ServiceModal.css";
import profile1 from "../assets/profiles/profile1.jpg";
import profile2 from "../assets/profiles/profile2.jpg";
import profile3 from "../assets/profiles/profile3.jpg";
import profile4 from "../assets/profiles/profile4.jpg";
import profile5 from "../assets/profiles/profile5.jpg";


const ServiceModal = ({ isOpen, onClose, serviceTitle }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    serviceType: "",
    subService: "",
  });
  const [assignedPersonnel, setAssignedPersonnel] = useState(null);

  useEffect(() => {
    if (isOpen) {
      if (serviceTitle) {
        setStep(2);
        setFormData((prev) => ({
          ...prev,
          serviceType: serviceTitle,
          subService: "",
        }));
      } else {
        setStep(1);
      }
    }
  }, [isOpen, serviceTitle]);

  const services = {
    Plumbing: ["Leak repair", "Pipe installation", "Drain cleaning", "Water heater service"],
    Renovation: ["Kitchen renovation", "Bathroom remodel", "Room addition", "Full home renovation"],
    Painting: ["Interior painting", "Exterior painting", "Cabinet painting", "Accent walls"],
    "Electrical Work": ["Wiring installation", "Outlet replacement", "Light fixture installation", "Panel upgrade"],
    Carpentry: ["Cabinet making", "Door installation", "Deck building", "Custom shelving"],
    Roofing: ["Roof repair", "Roof replacement", "Shingle installation", "Gutter service"],
  };

  const personnelData = {
    Plumbing: {
      name: "Omar Salifu",
      profile: profile1,
      occupationRange: "Senior Plumber",
      location: "Community 22, Tema",
      phone: "+233 555-123-4567",
    },
    Renovation: {
      name: "Christian Odai Mensah",
      profile: profile2,
      occupationRange: "Lead Contractor",
      location: "North Legon, Accra",
      phone: "+233 279-234-5678",
    },
    Painting: {
      name: "Michael Fiagbor",
      profile: profile3,
      occupationRange: "Master Painter",
      location: "Osu, Accra",
      phone: "+233 500-345-6789",
    },
    "Electrical Work": {
      name: "Anthony Obodaih",
      profile: profile4,
      occupationRange: "Certified Electrician",
      location: "Ashaiman",
      phone: "+233 555-456-7890",
    },
    Carpentry: {
      name: "James Ntiamoah Bekoe",
      profile: profile5,
      occupationRange: "Master Carpenter",
      location: "Community 12, Tema",
      phone: "+233 209-567-8901",
    },
    Roofing: {
      name: "David Tweneboah Kodua",
      profile: profile2,
      occupationRange: "Expert Roofer",
      location: "Sakumono Estate, Tema",
      phone: "+233 555-678-9012",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: service,
      subService: "",
    }));
    setStep(2);
  };

  const handleSubServiceSelect = (subService) => {
    setFormData((prev) => ({
      ...prev,
      subService: subService,
    }));
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service request submitted:", formData);
    // Assign personnel based on service type
    const assignedPerson = personnelData[formData.serviceType];
    setAssignedPersonnel(assignedPerson);
    setStep(4);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      serviceType: "",
      subService: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="service-modal-close" onClick={onClose}>
          <FaTimes size={20} />
        </button>

        <div className="service-modal-header">
          <h2>Request Service</h2>
          {step < 4 && <p>Step {step} of 3</p>}
        </div>

        {step === 1 && (
          <div className="service-step">
            <p className="step-label">Select Service Type</p>
            <div className="service-grid">
              {Object.keys(services).map((service) => (
                <button
                  key={service}
                  className="service-option"
                  onClick={() => handleServiceSelect(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="service-step">
            <p className="step-label">Select {formData.serviceType} Service</p>
            <div className="service-list">
              {services[formData.serviceType].map((subService) => (
                <button
                  key={subService}
                  className="sub-service-option"
                  onClick={() => handleSubServiceSelect(subService)}
                >
                  {subService}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <form className="service-form" onSubmit={handleSubmit}>
            <div className="step-header">
              <p className="step-label">Your Information</p>
            </div>

            <div className="service-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="service-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="service-form-group">
              <label>Home Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="service-form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="selected-service-info">
              <p><strong>Service:</strong> {formData.serviceType}</p>
              <p><strong>Sub-service:</strong> {formData.subService}</p>
            </div>

            <button type="submit" className="submit-service-btn">
              Submit Request
            </button>
          </form>
        )}

        {step === 4 && assignedPersonnel && (
          <div className="service-confirmation">
            <p className="confirmation-message">
              Your service request has been confirmed and a professional has been assigned to your request.
            </p>

            <div className="personnel-card">
              <img
                src={assignedPersonnel.profile}
                alt={assignedPersonnel.name}
                className="personnel-profile-pic"
              />
              <div className="personnel-info">
                <h3 className="personnel-name">{assignedPersonnel.name}</h3>
                <p className="personnel-occupation">{assignedPersonnel.occupationRange}</p>
                <div className="personnel-details">
                  <p><strong>Location:</strong> {assignedPersonnel.location}</p>
                  <p><strong>Phone:</strong> {assignedPersonnel.phone}</p>
                </div>
              </div>
            </div>

            <button className="close-confirmation-btn" onClick={resetForm}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceModal;
