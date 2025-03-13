import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="logiqdriven-cookie-consent"
          style={{ background: "rgba(17, 24, 39, 0.95)" }}
          buttonStyle={{
            background: "rgb(147, 51, 234)",
            color: "white",
            fontSize: "14px",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
          }}
          declineButtonStyle={{
            background: "transparent",
            border: "1px solid rgb(147, 51, 234)",
            color: "white",
            fontSize: "14px",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience. See our{" "}
          <a href="/privacy" className="text-purple-400 hover:text-purple-300">
            Privacy Policy
          </a>{" "}
          for more details.
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;
