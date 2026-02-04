import { useState } from "react";
import "../styles/Services.css";
import ServiceModal from "./ServiceModal";
import {
  FaWrench,
  FaHammer,
  FaPaintBrush,
  FaBolt,
  FaTree,
  FaHome,
} from "react-icons/fa";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaWrench size={40} />,
      title: "Plumbing",
      description:
        "Providing reliable plumbing services with professional installation and efficient problem-solving",
    },
    {
      id: 2,
      icon: <FaHammer size={40} />,
      title: "Renovation",
      description:
        "Transform your space with our expert renovation and redesign for amazing spaces",
    },
    {
      id: 3,
      icon: <FaPaintBrush size={40} />,
      title: "Painting",
      description:
        "Giving your space a fresh look with a touch of vibrant colors",
    },
    {
      id: 4,
      icon: <FaBolt size={40} />,
      title: "Electrical Work",
      description:
        "Ensuring code compliance, safety, and proper installation with precision and professionalism",
    },
    {
      id: 5,
      icon: <FaTree size={40} />,
      title: "Carpentry",
      description:
        "Crafting custom woodwork and installations with care for lasting beautiful results",
    },
    {
      id: 6,
      icon: <FaHome size={40} />,
      title: "Roofing",
      description:
        "Providing strong protection and aesthetic enhancement to your home protection",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="services-label">SERVICES</p>
        <h2 className="services-title">
          Explore our comprehensive range <br /> of professional services
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-action-btn">Get Service</button>
          </div>
        ))}
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedService?.title}
      />
    </section>
  );
};

export default Services;
