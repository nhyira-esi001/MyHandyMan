import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Page = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h1>{title}</h1>
    <p>Page content goes here...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/services" element={<Page title="Services" />} />
        <Route path="/why-us" element={<Page title="Why Us" />} />
        <Route path="/testimonials" element={<Page title="Testimonials" />} />
        <Route path="/faq" element={<Page title="FAQ" />} />
        <Route path="/about" element={<Page title="About" />} />
        <Route path="/signup" element={<Page title="Sign Up" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
