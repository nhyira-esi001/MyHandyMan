import "../styles/Features.css";
import { FaBriefcase, FaCheck, FaCoins } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaBriefcase size={32} />,
      title: "Professional Expertise",
    },
    {
      id: 2,
      icon: <FaCheck size={32} />,
      title: "Reliable Service",
    },
    {
      id: 3,
      icon: <FaCoins size={32} />,
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
