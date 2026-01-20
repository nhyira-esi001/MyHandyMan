import { useState } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aaron Hanley",
      title: "Home Owner",
      text: "Working with the handyman service was a breeze! Their expertise and efficiency in handling basic issues, were impressive. I'm thrilled with the result!",
      avatar: "👨",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Property Manager",
      text: "Professional, reliable, and affordable. The team handled all our maintenance needs efficiently and left the workspace clean and organized.",
      avatar: "👩",
    },
    {
      id: 3,
      name: "Mike Davis",
      title: "Contractor",
      text: "Excellent service and outstanding quality of work. They understood our requirements perfectly and delivered beyond expectations.",
      avatar: "👨",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <p className="testimonials-label">TESTIMONIALS</p>
        <h2 className="testimonials-title">
          Hear what they have to say about <br /> our professional services.
        </h2>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">{current.text}</p>

          <div className="testimonial-author">
            <div className="author-avatar">{current.avatar}</div>
            <div className="author-info">
              <p className="author-name">{current.name}</p>
              <p className="author-title">{current.title}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-navigation">
          <button
            className="nav-btn prev-btn"
            onClick={prevTestimonial}
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            className="nav-btn next-btn"
            onClick={nextTestimonial}
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
