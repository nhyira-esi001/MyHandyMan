import { FaTimes } from "react-icons/fa";
import "../styles/RenovaInfoModal.css";

const RenovaInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="info-modal-close" onClick={onClose}>
          <FaTimes size={20} />
        </button>

        <div className="info-modal-header">
          <h2>About EMIWƆK</h2>
          <p>Our Story & Mission</p>
        </div>

        <div className="info-modal-body">
          <div className="info-section">
            <h3>What is EMIWƆK?</h3>
            <p>
              EMIWƆK is a comprehensive home services platform dedicated to transforming houses into dream homes. 
              We believe that every home deserves professional care, and every homeowner deserves a reliable, 
              trustworthy partner in maintaining and improving their property.
            </p>
          </div>

          <div className="info-section">
            <h3>The Name & Inspiration</h3>
            <p>
              "EMIWƆK" is derived from Ghanaian cultural values, representing quality craftsmanship, trust, and community service.
              We chose this name because it perfectly encapsulates our mission: to serve communities with excellence, 
              restore homes to their best condition, and revitalize the living experiences of our clients. Whether it's a fresh 
              coat of paint, a complete renovation, or essential repairs, we believe in breathing new life into 
              every project we undertake.
            </p>
          </div>

          <div className="info-section">
            <h3>Our Background</h3>
            <p>
              Founded with a vision to bridge the gap between homeowners and quality service providers, EMIWƆK 
              brings together a network of skilled professionals across multiple trades. With years of combined 
              experience in plumbing, electrical work, carpentry, roofing, painting, and renovation, our team 
              understands the intricacies of home maintenance and improvement.
            </p>
          </div>

          <div className="info-section">
            <h3>Our Commitment</h3>
            <p>
              We are committed to providing:
            </p>
            <ul>
              <li>Professional expertise and craftsmanship</li>
              <li>Transparent communication and honest pricing</li>
              <li>Timely completion of projects</li>
              <li>Exceptional customer service</li>
              <li>Quality that stands the test of time</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Why Choose EMIWƆK?</h3>
            <p>
              At EMIWƆK, we don't just fix problems—we create solutions. We listen to your needs, understand your 
              vision, and deliver results that exceed expectations. Our open, positive, and proactive approach 
              ensures that every project is an opportunity to build a lasting relationship with our clients.
            </p>
          </div>
        </div>

        <button className="info-modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RenovaInfoModal;
