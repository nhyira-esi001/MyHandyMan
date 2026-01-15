        import "../styles/hero.css";
        import artisan from "../assets/images/artsisanMan.png";

const Hero = () => {
    return(

    <section className="hero">
      {/* Left content */}
      <div className="hero__content">
        <span className="hero__tagline">WE ARE READY TO FIX!</span>

        <h1 className="hero__title">
          The best solution <br /> for every home. <br />
        </h1>

        <p className="hero__description">
          Our open, positive, and proactive approach helps us find ways
          to align our work environment to your taste.
        </p>

        <div className="hero__actions">
          <button className="hero__primary-btn">Book Now</button>
          <button className="hero__secondary-btn">Read More</button>
        </div>
      </div>

      {/* Right image */}
      <div className="hero__image">
        <img src={artisan} alt="Me" className="hero__photo" />
      </div>
    </section>
  );
};

export default Hero;
