import { useState } from "react";
import "../styles/WhyChooseUs.css";
import RenovaInfoModal from "./RenovaInfoModal";
import { FaCheckCircle, FaUserTie } from "react-icons/fa";
import whyUs from "../assets/images/whyus.jpg";

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Monthly Inspection",
    "General Repair Maintenance",
    "Fixing of Faulty Wiring",
  ];

  return (
    <section className="why-choose" id="why-us">
      <div className="why-choose-container">
        <div className="why-choose-image">
          <img src={whyUs} alt="ƐNIWƆK logo" className="whyUs-icon" />
        </div>

        <div className="why-choose-content">
          <p className="why-choose-label">WHY US</p>
          <h2 className="why-choose-title">
            The ƐNIWƆK advantage: <br /> reasons to trust our expertise
          </h2>

          <p className="why-choose-description">
            Our open, positive, and proactive approach helps us find ways to
            align your work environment to your taste. With our comprehensive
            services and professional team, we deliver excellence.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <FaCheckCircle className="benefit-check" />
                {benefit}
              </li>
            ))}
          </ul>

          <button className="why-choose-btn" onClick={() => setIsModalOpen(true)}>
            Read More
          </button>
        </div>
      </div>

      <RenovaInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default WhyChooseUs;
