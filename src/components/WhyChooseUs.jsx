import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = [
    "Monthly Inspection",
    "General Repair Maintenance",
    "Fixing of Faulty Wiring",
  ];

  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <div className="why-choose-image">
          <div className="placeholder-image">👷</div>
        </div>

        <div className="why-choose-content">
          <p className="why-choose-label">WHY US</p>
          <h2 className="why-choose-title">
            The Renova advantage: <br /> reasons to trust our expertise
          </h2>

          <p className="why-choose-description">
            Our open, positive, and proactive approach helps us find ways to
            align your work environment to your taste.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <span className="benefit-check">●</span>
                {benefit}
              </li>
            ))}
          </ul>

          <button className="why-choose-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
