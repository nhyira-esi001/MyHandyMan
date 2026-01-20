import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">🏠</span>
            <span className="footer-text">Renova</span>
          </div>
          <p className="footer-description">
            Individually born. On-Site any, they're ready to go. And offering a blend in
            our professional and expertise.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">tw</a>
            <a href="#" className="social-link">ig</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Menu</h4>
          <ul className="footer-links">
            <li><a href="#">Why Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Repair</a></li>
            <li><a href="#">Plumbing</a></li>
            <li><a href="#">Roofing</a></li>
            <li><a href="#">Electrical</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Testimonials</h4>
          <ul className="footer-links">
            <li><a href="#">Client Stories</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
