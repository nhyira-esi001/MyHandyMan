import "../styles/Footer.css";
import { FaHome, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo"><FaHome size={24} /></span>
            <span className="footer-text">EMIWƆK</span>
          </div>
          <p className="footer-description">
            Transforming homes with professional expertise and dedication. Our team is ready to deliver
            exceptional service and quality workmanship for all your home improvement needs.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" title="Facebook"><FaFacebook size={18} /></a>
            <a href="#" className="social-link" title="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="#" className="social-link" title="Twitter"><FaTwitter size={18} /></a>
            <a href="#" className="social-link" title="Instagram"><FaInstagram size={18} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Menu</h4>
          <ul className="footer-links">
            <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection("why-us"); }}>Why Us</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Plumbing</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Roofing</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Electrical</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Renovation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Info</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Book Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
