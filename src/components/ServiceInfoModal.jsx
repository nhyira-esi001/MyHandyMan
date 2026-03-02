import { FaTimes, FaCheckCircle, FaTag, FaListUl, FaInfoCircle } from "react-icons/fa";
import "../styles/ServiceInfoModal.css";

const serviceDetails = {
  Plumbing: {
    about:
      "Our plumbing team handles everything from minor drips to full pipe installations. We use high-grade materials and industry best practices to keep your water systems running safely and efficiently.",
    entails: [
      "Diagnosing leaks, blockages, and pressure issues",
      "Replacing or installing pipes, valves, and fixtures",
      "Testing water pressure and system integrity",
      "Providing maintenance tips and follow-up checks",
    ],
    types: [
      "Leak detection & repair",
      "Pipe installation & replacement",
      "Drain cleaning & unblocking",
      "Water heater installation & service",
      "Toilet & faucet repair",
      "Bathroom & kitchen plumbing",
    ],
    pricing: [
      { label: "Minor leak repair", range: "GH₵ 80 – 200" },
      { label: "Drain cleaning", range: "GH₵ 150 – 350" },
      { label: "Pipe installation (per metre)", range: "GH₵ 60 – 120" },
      { label: "Water heater service", range: "GH₵ 300 – 700" },
    ],
    note: "Pricing varies by severity, materials required, and location. Free on-site assessment available.",
  },
  Renovation: {
    about:
      "We breathe new life into spaces with comprehensive renovation services. Whether you're updating a single room or overhauling your entire property, our contractors deliver high-quality results on time and within budget.",
    entails: [
      "Initial design consultation and planning",
      "Demolition and structural modifications where needed",
      "Material sourcing and procurement",
      "Finishing, tiling, flooring, and painting",
    ],
    types: [
      "Kitchen renovation",
      "Bathroom remodel",
      "Room addition or extension",
      "Full home renovation",
      "Office fitouts",
      "Flooring & tiling",
    ],
    pricing: [
      { label: "Bathroom remodel", range: "GH₵ 2,000 – 8,000" },
      { label: "Kitchen renovation", range: "GH₵ 3,500 – 15,000" },
      { label: "Room addition", range: "GH₵ 5,000 – 20,000+" },
      { label: "Full home renovation", range: "GH₵ 15,000 – 60,000+" },
    ],
    note: "Quotes are project-specific. Contact us for a free detailed estimate.",
  },
  Painting: {
    about:
      "A fresh coat of paint transforms any space instantly. Our painters are skilled in both interior and exterior applications, delivering smooth, long-lasting finishes with premium paints.",
    entails: [
      "Surface preparation — sanding, filling, and priming",
      "Colour consultation and shade matching",
      "Application using brushes, rollers, or sprayers",
      "Clean-up and final inspection",
    ],
    types: [
      "Interior wall & ceiling painting",
      "Exterior painting & weatherproofing",
      "Cabinet & furniture painting",
      "Accent walls & murals",
      "Epoxy floor coatings",
      "Texture & decorative finishes",
    ],
    pricing: [
      { label: "Interior room (per room)", range: "GH₵ 300 – 800" },
      { label: "Exterior (per storey)", range: "GH₵ 1,500 – 4,000" },
      { label: "Cabinet painting", range: "GH₵ 400 – 1,200" },
      { label: "Accent wall", range: "GH₵ 200 – 600" },
    ],
    note: "Paint material costs are separate or can be included in a full package quote.",
  },
  "Electrical Work": {
    about:
      "Safety is paramount in electrical work. Our certified electricians handle installations, repairs, and upgrades to ensure your property meets all code requirements while keeping your family and assets protected.",
    entails: [
      "Assessing existing wiring and load capacity",
      "Installing or upgrading electrical panels",
      "Running conduit and pulling wire",
      "Testing circuits, outlets, and safety systems",
    ],
    types: [
      "Wiring installation & rewiring",
      "Outlet & switch replacement",
      "Light fixture & ceiling fan installation",
      "Panel upgrade & circuit breaker replacement",
      "Security & smart home wiring",
      "Generator connection",
    ],
    pricing: [
      { label: "Outlet / switch installation", range: "GH₵ 80 – 200 each" },
      { label: "Light fixture installation", range: "GH₵ 100 – 300 each" },
      { label: "Panel upgrade", range: "GH₵ 1,500 – 4,000" },
      { label: "Full rewiring (per room)", range: "GH₵ 600 – 1,500" },
    ],
    note: "All electrical work is performed by certified professionals and inspected for compliance.",
  },
  Carpentry: {
    about:
      "Our skilled carpenters craft custom woodwork and structural installations tailored to your exact specifications. From bespoke furniture to structural framing, we blend precision with artistry.",
    entails: [
      "Design consultation and material selection",
      "Custom cutting, shaping, and joinery",
      "On-site installation and fitting",
      "Sanding, staining, and finishing",
    ],
    types: [
      "Custom cabinet & wardrobe making",
      "Door & window installation",
      "Deck & pergola building",
      "Custom shelving & storage",
      "Staircase construction",
      "Wood floor installation",
    ],
    pricing: [
      { label: "Custom wardrobe (per unit)", range: "GH₵ 1,200 – 4,000" },
      { label: "Door installation", range: "GH₵ 300 – 800" },
      { label: "Deck construction (per sqm)", range: "GH₵ 200 – 500" },
      { label: "Custom shelving", range: "GH₵ 400 – 1,500" },
    ],
    note: "Prices depend on wood type, complexity, and dimensions. Samples and mood boards available on request.",
  },
  Roofing: {
    about:
      "Your roof is your first line of defence against the elements. Our roofing specialists provide durable, weather-resistant solutions using quality materials to protect and beautify your home.",
    entails: [
      "Roof inspection and damage assessment",
      "Removal of old or damaged roofing materials",
      "Waterproofing and underlayment installation",
      "Final inspection and gutter integration",
    ],
    types: [
      "Roof repair & patching",
      "Full roof replacement",
      "Shingle & metal sheet installation",
      "Flat roof installation",
      "Gutter installation & cleaning",
      "Skylight installation",
    ],
    pricing: [
      { label: "Roof repair (minor)", range: "GH₵ 500 – 1,500" },
      { label: "Full roof replacement (per sqm)", range: "GH₵ 150 – 400" },
      { label: "Gutter installation (per metre)", range: "GH₵ 50 – 120" },
      { label: "Skylight installation", range: "GH₵ 1,200 – 3,500" },
    ],
    note: "All roofing projects include a structural check. Warranties available on full replacements.",
  },
};

const ServiceInfoModal = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen || !serviceTitle) return null;

  const detail = serviceDetails[serviceTitle];
  if (!detail) return null;

  return (
    <div className="sinfo-overlay" onClick={onClose}>
      <div className="sinfo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sinfo-close" onClick={onClose}>
          <FaTimes size={18} />
        </button>

        <div className="sinfo-header">
          <FaInfoCircle size={22} className="sinfo-header-icon" />
          <div>
            <h2 className="sinfo-title">{serviceTitle}</h2>
          </div>
        </div>

        <div className="sinfo-body">
          {/* About */}
          <div className="sinfo-section">
            <h3 className="sinfo-section-title">
              <FaInfoCircle size={14} /> About This Service
            </h3>
            <p className="sinfo-text">{detail.about}</p>
          </div>

          {/* What it entails */}
          <div className="sinfo-section">
            <h3 className="sinfo-section-title">
              <FaListUl size={14} /> What It Entails
            </h3>
            <ul className="sinfo-list">
              {detail.entails.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle size={12} className="sinfo-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Types of services */}
          <div className="sinfo-section">
            <h3 className="sinfo-section-title">
              <FaListUl size={14} /> Types of Services
            </h3>
            <div className="sinfo-tags">
              {detail.types.map((type, i) => (
                <span key={i} className="sinfo-tag">{type}</span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="sinfo-section">
            <h3 className="sinfo-section-title">
              <FaTag size={14} /> Estimated Pricing
            </h3>
            <div className="sinfo-pricing">
              {detail.pricing.map((p, i) => (
                <div key={i} className="sinfo-price-row">
                  <span className="sinfo-price-label">{p.label}</span>
                  <span className="sinfo-price-range">{p.range}</span>
                </div>
              ))}
            </div>
            <p className="sinfo-note">* {detail.note}</p>
          </div>
        </div>

        <button className="sinfo-cta" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default ServiceInfoModal;
