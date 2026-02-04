import "../styles/hero.css";
import artisan from "../assets/images/artsisanMan.jpg";

const Hero = ({ onReadMoreClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Left content */}
      <div className="hero__content">
        <span className="hero__tagline">WE ARE READY TO FIX!</span>

        <h1 className="hero__title">
          The best solution <br /> for every home. <br />
        </h1>

        <p className="hero__description">
          Our open, positive, and proactive approach helps us find ways
          to align our work environment to your taste. With our comprehensive
          range of professional services, we're ready to transform your space
          into something extraordinary.
        </p>

        <div className="hero__actions">
          <button className="hero__primary-btn" onClick={() => scrollToSection("services")}>
            Book Now
          </button>
          <button className="hero__secondary-btn" onClick={() => scrollToSection("why-us")}>
            Read More
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="hero__image">
        <img src={artisan} alt="Artisan" className="hero__photo" />
      </div>
    </section>
  );
};

export default Hero;
