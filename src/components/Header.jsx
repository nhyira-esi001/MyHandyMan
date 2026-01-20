import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__brand">
        <span className="logo-icon">⬛</span>
        <span className="logo-text">Renova</span>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/why-us" className="nav-link">
          Why Us
        </NavLink>
        <NavLink to="/testimonials" className="nav-link">
          Testimonials
        </NavLink>
        <NavLink to="/faq" className="nav-link">
          FAQ
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </nav>

      {/* Actions */}
      <div className="header__actions">
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
        <NavLink to="/signup" className="signup-btn">
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
