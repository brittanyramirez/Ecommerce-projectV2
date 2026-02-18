import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import Contact from "./pages/contact.jsx";
import Gallery from "./pages/gallery.jsx";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f6f4] text-neutral-900">
        <Navbar />

        {/* IMPORTANT: no max-width wrapper here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
