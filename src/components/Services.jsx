import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🔧",
      title: "Plumbing",
      description:
        "Providing reliable plumbing services with professional installation and efficient problem-solving",
    },
    {
      id: 2,
      icon: "🔨",
      title: "Renovation",
      description:
        "Transform your space with our expert renovation and redesign for amazing spaces",
    },
    {
      id: 3,
      icon: "🎨",
      title: "Painting",
      description:
        "Giving your space a fresh look with a touch of vibrant colors",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Electrical Work",
      description:
        "Ensuring code compliance, safety, and proper installation with precision and professionalism",
    },
    {
      id: 5,
      icon: "🪵",
      title: "Carpentry",
      description:
        "Crafting custom woodwork and installations with care for lasting beautiful results",
    },
    {
      id: 6,
      icon: "🏠",
      title: "Roofing",
      description:
        "Providing strong protection and aesthetic enhancement to your home protection",
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <p className="services-label">SERVICES</p>
        <h2 className="services-title">
          Explore our comprehensive range <br /> of professional services
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
