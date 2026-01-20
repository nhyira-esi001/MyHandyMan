import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

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
      <main>
        <Hero />
        <Features />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <BookingForm />
        <Footer />

        <Routes>
          <Route path="/why-us" element={<Page title="Why Us" />} />
          <Route path="/testimonials" element={<Page title="Testimonials" />} />
          <Route path="/faq" element={<Page title="FAQ" />} />
          <Route path="/about" element={<Page title="About" />} />
          <Route path="/login" element={<Page title="Login" />} />
          <Route path="/signup" element={<Page title="Sign Up" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
