import "./App.css";
// Using HashRouter so the app works seamlessly on GitHub Pages (no server-side
// rewrites needed). Deep links use the form: /#/about, /#/contact, etc.
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import EnglishCoaching from "./pages/EnglishCoaching";
import StudentVisa from "./pages/StudentVisa";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App bg-brand-cream">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/english-coaching" element={<EnglishCoaching />} />
          <Route path="/student-visa" element={<StudentVisa />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </HashRouter>
    </div>
  );
}

export default App;
