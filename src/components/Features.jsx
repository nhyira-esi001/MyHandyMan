import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "💼",
      title: "Professional Expertise",
    },
    {
      id: 2,
      icon: "✓",
      title: "Reliable Service",
    },
    {
      id: 3,
      icon: "💰",
      title: "Affordable Rates",
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Features;
