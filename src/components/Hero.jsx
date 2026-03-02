import { useState, useEffect, useCallback } from "react";
import "../styles/hero.css";
import artisan from "../assets/images/artsisanMan.jpg";
import whyUs from "../assets/images/whyUs.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    tagline: "WE ARE...",
    title: <>Da fix buddy!</>,
    description:
      "Our open, positive, and proactive approach helps us find ways to align our work environment to your taste. With our comprehensive range of professional services, we're ready to transform your space into something extraordinary.",
    image: artisan,
    alt: "Artisan handyman ready to help",
  },
  {
    tagline: "PROFESSIONAL EXPERTISE",
    title: <>Your go-to experts for<br /> home maintenance.</>,
    description:
      "Book certified and experienced handymen for all your home and office repair needs. From plumbing and electrical work to general maintenance, we deliver reliable service at prices that fit your budget — without compromising on quality.",
    image: whyUs,
    alt: "Professional renovation team at work",
  },
  {
    tagline: "RELIABLE SERVICE",
    title: <>Professional services just <br /> a click away.</>,
    description:
      "Our vetted handymen bring real expertise to every job, showing up on time and getting it done right. Enjoy stress-free repairs, transparent pricing, and dependable service designed to save you time and money.",
    image: artisan,
    alt: "Trusted artisan professional",
  },
  {
    tagline: "AFFORDABLE RATES",
    title: <>Excellence worth<br /> every dime.</>,
    description:
      "We don't consider a job done until you're completely satisfied and make it worth your money. Our commitment to quality means thorough inspections, clean workmanship, and follow-through on every project we undertake.",
    image: whyUs,
    alt: "High quality home service delivery",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero">
      {/* Left content */}
      <div className={`hero__content hero__content--fade${animating ? " hero__content--out" : ""}`}>
        <span className="hero__tagline">{slide.tagline}</span>

        <h1 className="hero__title">{slide.title}</h1>

        <p className="hero__description">{slide.description}</p>

        <div className="hero__actions">
          <button className="hero__primary-btn" onClick={() => scrollToSection("services")}>
            Book Now
          </button>
        </div>

        {/* Dot indicators */}
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot${i === current ? " hero__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="hero__image">
        <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
          <FaChevronLeft size={18} />
        </button>

        <img
          key={current}
          src={slide.image}
          alt={slide.alt}
          className="hero__photo hero__photo--fade"
        />

        <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
