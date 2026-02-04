import "../styles/CTA.css";
import { FaPhone } from "react-icons/fa";

const CTA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to get your home <br /> in top shape?
        </h2>
        <p className="cta-description">
          Schedule your service call or book an estimate <br /> to discover how we can help.
        </p>
        <button className="cta-button" onClick={() => scrollToSection("services")}>
          <FaPhone size={18} /> Book a Service
        </button>
      </div>
    </section>
  );
};

export default CTA;
